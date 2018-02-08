import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL, AuthToken} from '../../utils/Constants';
import Navbar from '../common/Navbar';

class AddRecipe extends Component{
    constructor(props){
        super(props);
        this.state = {
            category_array: [],
            name: '',
            details: '',
            ingredients: '',
            category_id: '',
            id: this.props.id
        }
    }

    getRecipeId(){
        return this.props.match.params.id;
    }

    componentDidMount(){
        axios.get(`${BASE_URL}categories/${this.getRecipeId()}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({category_array: response.data})
            this.setState({category_id: this.state.category_array.id})
        })
        .catch(error => {
            alert(error)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { category_id, name, details, ingredients} = this.state;
        axios.post(BASE_URL+'recipes',
         {
            category_id: category_id,
            name: name,
            details: details,
            ingredients: ingredients
        },
        {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Successfully Added Recipe ', this.getRecipeId())
            this.props.history.push('/recipe/'+this.getRecipeId())
        })
        .catch(error => {
            alert(error);
        })

    }

    handleSelectChanged = (event) => {
        this.setState({category_id: event.target.value});
    }

    handleRecipeNameChanged = (event) => {
        this.setState({name: event.target.value});
    }

    handleDetailsChanged = (event) => {
        this.setState({details: event.target.value});
    }

    handleIngredientsChanged = (event) => {
        this.setState({ingredients: event.target.value});
    }

    render(){
        const { category_array, category_id } = this.state;
            return(
                <div>
                    <Navbar />
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Add Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                    <select className="form-control" name="category" value={category_id} required>
                                    <option>{"CATEGORY NAME: "+category_array.name}</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <input type="text" name="recipename" placeholder="RECIPE NAME" className="form-control"
                                        onChange={this.handleRecipeNameChanged}
                                        required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" name="description" placeholder="RECIPE DESCRIPTION" className="form-control" 
                                    onChange={this.handleDetailsChanged}
                                    required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" name="ingredients" placeholder="RECIPE INGREDIENTS" className="form-control"
                                    onChange={this.handleIngredientsChanged}
                                    required></textarea>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-success btn-md" type="submit" value="CREATE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

export default AddRecipe;