import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../common/Navbar';
import {BASE_URL, AuthToken} from '../../utils/Constants';

class User extends Component {
    constructor(){
        super();
        this.state = {
            user_details_array: [],
            username: '',
            email: '',
            fullname: '',
            old_password: '',
            new_password: ''
        }
    }

    default(){
        axios.get(BASE_URL+'users/info', {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({user_details_array: response.data});
        })
        .catch(error => {
            alert('user error: ' + error);
        })
    }

    componentDidMount(){
        this.default()
    }

    handleFullnameChanged = (event) => {
        this.setState({fullname: event.target.value});
    }


    handleOldPasswordChanged = (event) => {
        this.setState({old_password: event.target.value});
    }

    handleNewPasswordChanged = (event) => {
        this.setState({new_password: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {username, fullname, email, old_password, new_password, user_details_array} = this.state;
        axios.put(`${BASE_URL}users/${user_details_array.id}`, {
            username: username,
            fullname: fullname,
            email: email,
            old_password: old_password,
            new_password: new_password
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



    render(){
        const {user_details_array} = this.state;
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
                                    <input type="text" name="fullname" placeholder={user_details_array.fullname + " " + "[FULLNAME]"} className="form-control"
                                    onChange={this.handleFullnameChanged}
                                    required/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input type="password" name="password" placeholder="OLD PASSWORD" className="form-control"
                                    onChange={this.handleOldPasswordChanged}
                                    required/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input type="password" name="new_password" placeholder="NEW PASSWORD" className="form-control"
                                    onChange={this.handleNewPasswordChanged}
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