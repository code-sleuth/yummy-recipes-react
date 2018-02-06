import React, { Component } from 'react';
import axios from 'axios'
import {BASE_URL, AuthToken} from '../../utils/Constants';
import Navbar from '../common/Navbar';

class EditCategory extends Component {
    constructor(){
        super();
        this.state = {
            category: '',
            category_id: '',
            edit_category_array: []
        }
    }

    updateCategory = (event) => {
        event.preventDefault();
        axios.put(`${BASE_URL}categories/${this.getCategoryId()}`, {name: this.state.category}, 
        {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Success '+ response.data.message);
            this.props.history.push('/categories')
        })
        .catch(error => {
            alert(error);
        });
    }

    getCategoryId(){
        return this.props.match.params.id;
    }

    componentDidMount(){
        axios.get(`${BASE_URL}categories/${this.getCategoryId()}`, {headers: {Authorization: AuthToken}})
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
        });
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
        console.log(this.state.edit_category_array)
                /* EDIT CATEGORY */
        return(
            <div>
                <Navbar />
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
                                    <option value={0}>{this.state.edit_category_array.name}</option>      
                                </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <input type="text" name="optcategory" placeholder="NEW CATEGORY NAME" className="form-control"
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
        </div>
        );
    }
}

export default EditCategory;