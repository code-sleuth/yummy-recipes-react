import React, { Component } from 'react';
import axios from 'axios';
import {AuthToken, BASE_URL} from '../../utils/Constants';
import Navbar from '../common/Navbar';

class AddCategory extends Component{
    constructor(){
        super();
        this.state = {
            category: "",
        }
    }

    submitAddCategoryForm = (event) => {
        event.preventDefault();
        axios.post(BASE_URL+'categories', {
            name: this.state.category,
        }, {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Response: Category ' + response.statusText);
            this.props.history.push('/categories')
        })
        .catch(error => {
            if (!error.response.status){
                alert('no status code')
            }
            else if (error.response.status === 409){
                alert('Duplicate Category Name');
            } else {
                alert(error)
            }
        });
        this.reloadPage();
    }

    handleCategoryNameChanged = (event) => {
        this.setState({category: event.target.value})
    }

    reloadPage(){
        window.location.reload();
    }

    render(){
        
        return(
            /* ADD CATEGORY */
            <div className="modal-dialog">
                <Navbar />
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">YUMMY RECIPES: Add Category</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.submitAddCategoryForm}>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <input type="text" name="category" placeholder="CATEGORY" className="form-control"
                                onChange={this.handleCategoryNameChanged}
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
        );
    }
}

export default AddCategory;