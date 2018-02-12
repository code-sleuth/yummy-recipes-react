import React, { Component } from 'react';
import axios from 'axios'
import {BASE_URL, AuthToken} from '../../utils/Constants';
import Navbar from '../common/Navbar';
import { get } from 'http';
class EditCategory extends Component {
    constructor(){
        super();
        this.state = {
            catData: {category: '', category_id: ''},
            edit_category_array: []
        }
    }

    // Function called to update category
    updateCategory = (event) => {
        event.preventDefault();
        const {catData} = this.state;
        axios.put(`${BASE_URL}categories/${this.getCategoryId()}`, {name: catData.category}, 
        {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Success '+ response.data.message);
            this.props.history.push('/categories')
        })
        .catch(error => {
            alert(error);
        });
    }

    // function that gets category id from url
    getCategoryId(){
        return this.props.match.params.id;
    }

    // life cycle method that loads default state of components
    componentDidMount(){
        axios.get(`${BASE_URL}categories/${this.getCategoryId()}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({edit_category_array: response.data})
        })
        .catch(error => {
            //console.log(error)
        });
    }

    // function to handle user input change
    handleChange = (event) => {
        const field = event.target.id
        let catData = this.state.catData
        catData[field] = event.target.value
        this.setState({ catData })
    }

    // function to render jsx
    render(){
                /* EDIT CATEGORY */
        const {edit_category_array, category_id} = this.state;
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
                                <select className="form-control" id="category_id" onChange={this.handleChange} value={category_id}  required>
                                    <option value={0}>{edit_category_array.name}</option>      
                                </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <input type="text" id="category" placeholder="NEW CATEGORY NAME" className="form-control"
                                onChange={this.handleChange} 
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