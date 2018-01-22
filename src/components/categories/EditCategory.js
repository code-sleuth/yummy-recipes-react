import React, { Component } from 'react';
import axios from 'axios'

class EditCategory extends Component {
    constructor(){
        super();
        this.state = {
            category: '',
            category_id: '',
            edit_category_array: []
        }
    }

    getAccessToken(){
        return localStorage.getItem('token');
    }

    updateCategory = (event) => {
        event.preventDefault();
        axios.put(`http://127.0.0.1:5000/categories/${this.state.category_id}`, {name: this.state.category}, 
        {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            alert('Success '+ response.data.message);
            this.reloadPage();
        })
        .catch(error => {
            alert(error);
        });
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:5000/categories', {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            this.setState({edit_category_array: response.data})
        })
        .catch(error => {
            if (!error.response.status){
                this.handleLogout();
                this.reloadPage();
            } else if (error.response.status === 409){
                alert('Duplicate Category Name');
            } else {
                alert('Alert ' + alert.response.status)
            }
        })
    }

    handleLogout(){
        localStorage.removeItem('token');
        this.setState();
    }

    reloadPage(){
        window.location.reload();
    }

    handleCategroyEdited = (event) => {
        this.setState({category: event.target.value});
    }

    handleSelectChanged = (event) => {
        this.setState({category_id: event.target.value});
    }
    render(){
        if (this.state.edit_category_array) {
            const all_the_categories = this.state.edit_category_array.map((category) => {
                return(
                    <option value={category.id} key={category.id}>{category.name}</option>
                );
            });

            return(
                /* EDIT CATEGORY */
    
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Edit Category</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.updateCategory}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                    <select className="form-control" name="select_item" onChange={this.handleSelectChanged} value={this.state.category_id}  required>
                                       <option value={0}>SELECT CATEGORY TO EDIT</option>
                                       { all_the_categories }       
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                    <input type="text" name="optcategory" placeholder="CATEGORY" className="form-control"
                                    onChange={this.handleCategroyEdited} 
                                    required />
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-info btn-md" type="submit" name="updatecategory" value="UPDATE CATEGORY" 
                                    onClick={this.onClickSave}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                /* EDIT CATEGORY */
    
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Edit Category</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                    <select className="form-control" name="select_item"  required="required">
                                        <option value="">SELECT CATEGORY TO EDIT</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                    <input type="text" name="optcategory" placeholder="CATEGORY" className="form-control" 
                                    required />
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-info btn-md" type="submit" name="updatecategory" value="UPDATE CATEGORY" 
                                    onClick={this.onClickSave}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default EditCategory;