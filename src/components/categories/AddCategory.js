import React, { Component } from 'react';
import axios from 'axios';
import {AuthToken, BASE_URL} from '../../utils/Constants';
import Navbar from '../common/Navbar';

class AddCategory extends Component{
    constructor(){
        super();
        this.state = {
            catData:{category: ""},
        }
    }

    // Function to push form input to api
    submitAddCategoryForm = (event) => {
        event.preventDefault();
        const {catData} = this.state;
        axios.post(BASE_URL+'categories', {
            name: catData.category,
        }, {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Category Added Successfully');
            this.props.history.push('/categories')
        })
        .catch(error => {
            
        });
        //this.props.history.push('/categories')
    }

    // function to handle user input change
    handleChange = (event) => {
        const field = event.target.id
        let catData = this.state.catData
        catData[field] = event.target.value
        this.setState({ catData })
    }

    render(){
        return(
            /* ADD CATEGORY */
            <div>
                <Navbar />
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">YUMMY RECIPES: Add Category</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.submitAddCategoryForm}>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <input type="text" id="category" placeholder="CATEGORY" className="form-control"
                                onChange={this.handleChange}
                                required />
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <input className="btn btn-success btn-md" type="submit" name="submit" value="CREATE CATEGORY"
                                 />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AddCategory;