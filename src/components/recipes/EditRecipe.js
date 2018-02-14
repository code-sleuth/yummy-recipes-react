import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL, AuthToken} from '../../utils/Constants'; 
import Navbar from '../common/Navbar';
class EditRecipe extends Component{
    constructor(){
        super();
        this.state = {
            recData:{name: '',
            details: '',
            ingredients: ''},
            category_id: ''
        }
    }

    // life cycle function that sets the default state of the component
    componentDidMount(){
        const {details, ingredients, name} = this.props.match.params;
        this.setState({
            recData: {
                'name': name,
                'details': details,
                'ingredients': ingredients
            }
        })
    }

    //function to handle user input
    handleChange = (event) => {
        const field = event.target.id
        let recData = this.state.recData
        recData[field] = event.target.value
        this.setState({ recData })
    }

    // function to handle user submitted data
    handleSubmit = (event) => {
        event.preventDefault();
        const {recData, category_id} = this.state
        axios.put(`${BASE_URL}recipes/${this.getId()}`, {
            category_id: category_id, 
            name: recData.name,
            details: recData.details,
            ingredients: recData.ingredients
        },
        {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Success');
            this.props.history.push('/recipe/'+this.getCategoryId())
        })
        .catch(error => {
            alert(error)
        })
    }

    // function to get category id from url
    getId(){
        return this.props.match.params.recipe_id
    }

    getCategoryId(){
        return this.props.match.params.category_id
    }

    // function to handle jsx
    render(){
        const {recData} = this.state;
            return(
                <div>
                    <Navbar />
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Edit Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit} >
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <input type="text" value={recData.name} className="form-control" id="name"
                            
                                    onChange={this.handleChange}
                                    required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" id="details" value={recData.details} className="form-control"
                                    
                                    onChange={this.handleChange}
                                    required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" id="ingredients" className="form-control"
                                    value={recData.ingredients}
                                    onChange={this.handleChange}
                                    required></textarea>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-info btn-md" type="submit" name="updaterecipe" value="UPDATE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default EditRecipe;