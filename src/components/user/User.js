import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../common/Navbar';
import {BASE_URL, AuthToken} from '../../utils/Constants';

class User extends Component {
    constructor(){
        super();
        this.state = {
            userData:{
                username: '',
                email: '',
                fullname: '',
                old_password: '',
                new_password: '',
                id: ''
            }
        }
    }

    // function that calls api to populate state initially
    default(){
        axios.get(BASE_URL+'users/info', {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({userData: {
                'username': response.data.username,
                'email': response.data.email,
                'fullname': response.data.fullname,
                'id': response.data.id
                }
            });
        })
        .catch(error => {
            alert('user error: ' + error);
        })
    }

    // life cycle method that calls default() function
    componentDidMount(){
        this.default()
    }

    // function to handle user input change
    handleChange = (event) => {
        const field = event.target.id
        let userData = this.state.userData
        userData[field] = event.target.value
        this.setState({ userData })
    }
    
    // function to handle submited user data
    handleSubmit = (event) => {
        event.preventDefault();
        const {userData} = this.state;
        axios.put(`${BASE_URL}users/${userData.id}`, {
            username: userData.username,
            fullname: userData.fullname,
            email: userData.email,
            old_password: userData.old_password,
            new_password: userData.new_password
        },
        {headers: {Authorization: AuthToken}})
        .then(response =>{
            alert('Successfully updated')
            this.default()
        })
        .catch(error => {
            alert('edit user error: ' + error)
        });
    }

    // function to render jsx
    render(){
        const {userData} = this.state;
        return(
            <div>
            <Navbar />
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">EDIT USER DETAILS</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input type="text" id="fullname" className="form-control"
                                    value={userData.fullname}
                                    onChange={this.handleChange}
                                    required/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input type="password" id="password" placeholder="OLD PASSWORD" className="form-control"
                                    onChange={this.handleChange}
                                    required/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input type="password" id="new_password" placeholder="NEW PASSWORD" className="form-control"
                                    onChange={this.handleChange}
                                    required/>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-info btn-md" type="submit" id="updateuser" value="UPDATE ACCOUNT INFO"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;