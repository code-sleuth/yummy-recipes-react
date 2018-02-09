import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../utils/Constants';

// This component handles user signup
class SignupPage extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            fullname: "",
            email: "",
            password: "",
            confirmpassword: ""
        }
    }
    // function to handle username input changed
    handleUsernameChanged = (event) =>{
        this.setState({username: event.target.value});
    }

    // function to handle fullname input changed
    handleFullnameChanged = (event) =>{
        this.setState({fullname: event.target.value})
    }

    // function to handle email input changed
    handleEmailChanged = (event) =>{
        this.setState({email: event.target.value});
    }

    // function to handle password input changed
    handlePasswordChanged = (event) =>{
        this.setState({password: event.target.value});
    }

    // function to handle confirm password input changed
    handleConfirmPasswordChanged = (event) => {
        this.setState({confirmpassword: event.target.value});
    }

    // function to handle submitted form data
    submitForm = (event) => {
        event.preventDefault();
        const {username, fullname, email, confirmpassword, password} = this.state;
        if (confirmpassword !== password) {
            alert("Password not the same")
            return
        } else if(password.length < 4){
            alert("Password too short")
            return
        }
        axios.post(BASE_URL+'auth/register', {
            username: username,
            fullname: fullname,
            email: email,
            password: password,
        })
        .then(response => {
            alert("Response: " + response.data.message)
            this.props.history.push('/login')
        })
        .catch(error => {
            alert("Error: " + error.response)
        })
    }

    // function to handle jsx
    render(){
        
        return(
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">SIGN UP</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.submitForm}>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-eye-open"></i></span>
                                <input type="text" name="username" placeholder="USERNAME" className="form-control"
                                 value={this.state.username} 
                                 onChange={this.handleUsernameChanged}
                                 required 
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input type="text" name="fullname" placeholder="FULLNAME" className="form-control"
                                 onChange={this.handleFullnameChanged}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" name="email" placeholder="EMAIL" className="form-control"
                                 onChange={this.handleEmailChanged}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" name="password" placeholder="PASSWORD" className="form-control"
                                 onChange={this.handlePasswordChanged}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" name="confirmpassword" placeholder="CONFIRM PASSWORD" className="form-control"
                                 onChange={this.handleConfirmPasswordChanged}
                                 required
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <input className="btn btn-success btn-md" type="submit" name="submit" id="btnsignup" value="CREATE ACCOUNT" />
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default SignupPage;