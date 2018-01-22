import React, { Component } from 'react';
import axios from 'axios';

class AddCategory extends Component{
    constructor(){
        super();
        this.state = {
            category: "",
        }
    }

    getAccessToken(){
        return localStorage.getItem('token');
    }
    
    handleCategoryNameChanged = (event) => {
        this.setState({category: event.target.value})
    }

    submitAddCategoryForm = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:5000/categories', {
            name: this.state.category,
        }, {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            alert('Response: Category ' + response.statusText);
            this.reloadPage();
        })
        .catch(error => {
            if (!error.response.status){
                this.handleLogout();
                this.reloadPage();
            }
            else if (error.response.status === 409){
                alert('Duplicate Category Name');
            } else {
                alert(error)
            }
        });
        this.reloadPage();
    }

    handleLogout(){
        localStorage.removeItem('token');
        this.setState();
    }

    reloadPage(){
        window.location.reload();
    }

    render(){
        
        return(
            /* ADD CATEGORY */
            <div className="modal-dialog">
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