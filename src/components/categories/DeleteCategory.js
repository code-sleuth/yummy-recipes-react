import React, { Component } from 'react';
import axios from 'axios';

class DeleteCategory extends Component{
    constructor(){
        super();
        this.state = {
            category_id: '',
            category_array: []
        }
    }

    getAccessToken(){
        return localStorage.getItem('token');
    }

    handleLogout(){
        localStorage.removeItem('token');
        this.setState();
    }

    reloadPage(){
        window.location.reload();
    }


    deleteCategory = (event) => {
        event.preventDefault();
        axios.delete(`http://127.0.0.1:5000/categories/${this.state.category_id}`, {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            alert('Category deleted');
            window.location.reload();
        })
        .catch(error => {
            alert(error);
        })
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:5000/categories', {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            this.setState({category_array: response.data});
        })
        .catch(error => {
            if (!error.response.status){
                this.handleLogout();
                this.reloadPage();
            } else {
                alert('Alert ' + alert.response.status);
            }
        })
    }


    render(){
        if (this.state.category_array) {
            const all_the_categories = this.state.category_array.map((category) => {
                return(
                    <option value={category.id} key={category.id}>{category.name}</option>
                )
            })
            return(
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Delete Category</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.deleteCategory}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                    <select className="form-control" name="item" onChange={this.handleSelectChange}  value={this.state.category_id} required>
                                        <option value="">SELECT CATEGORY TO DELETE</option>
                                        { all_the_categories }
                                    </select>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-danger btn-md" type="submit" name="deletecategory" value="DELETE CATEGORY" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Delete Category</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                    <select className="form-control" name="item"  required="required">
                                        <option value="">SELECT CATEGORY TO DELETE</option>
                                        <option value="" ></option>
                                    </select>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-danger btn-md" type="submit" name="deletecategory" value="DELETE CATEGORY" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default DeleteCategory;