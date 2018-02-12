import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL, AuthToken} from '../../utils/Constants'; 
import Navbar from '../common/Navbar';
class EditRecipe extends Component{
    constructor(){
        super();
        this.state = {
            category_array: [],
            recipe_array: [],
            recData:{name: '',
            details: '',
            ingredients: ''},
            category_id: ''
        }
    }

    // life cycle function that sets the default state of the component
    componentDidMount(){
        axios.get(`${BASE_URL}recipes/${this.getId()}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({recipe_array: response.data});
        })
        .catch(error => {
            alert('failed to load edit recipes: ' + error);
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
            window.location.reload();
        })
        .catch(error => {
            alert(error)
        })
    }

    // function to get category id from url
    getId(){
        return this.props.match.params.id
    }

    // function to handle jsx
    render(){
        const {recipe_array} = this.state;
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
                                    <input type="text" placeholder={"OLD RECIPE NAME: "+recipe_array.name} className="form-control" id="name"
                                    onChange={this.handleChange}
                                    required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" id="details" placeholder={"OLD DETAILS: "+recipe_array.details} className="form-control"
                                    onChange={this.handleChange}
                                    required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" id="ingredients" placeholder={"OLD INGREDIENTS: "+recipe_array.ingredients} className="form-control"
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