import React, { Component } from 'react';
import axios from 'axios'
import {BASE_URL, AuthToken} from '../../utils/Constants';
import Navbar from '../common/Navbar';
import { get } from 'http';
class EditCategory extends Component {
    constructor(){
        super();
        this.state = {
            catData: {name: '', category_id: ''},
            edit_category_array: []
        }
    }

    // Function called to update category
    updateCategory = (event) => {
        event.preventDefault();
        const {catData} = this.state;
        axios.put(`${BASE_URL}categories/${catData.category_id}`, {name: catData.category}, 
        {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Success '+ response.data.message);
            this.props.history.push('/categories')
        })
        .catch(error => {
            alert(error);
        });
    }

    // life cycle method that loads default state of components
    componentDidMount(){
        const {name, id } = this.props.match.params;
        this.setState({catData: {
            'category': name,
            'category_id': id
        }})
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
        const {catData} = this.state;
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
                                <input type="hidden"  id="category_id" value={catData.category_id}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <input type="text" id="category" placeholder="NEW CATEGORY NAME" className="form-control"
                                value={catData.category}
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