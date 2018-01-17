import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsernameChanged(event) {
        this.setState({username: event.target.value});
        
    }

    handlePasswordChanged(event) {
        this.setState({password: event.target.value});
    }

    submitForm(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:5000/auth/login', {
            username: this.state.username,
            password: this.state.password
          })
          .then(response  => {
            console.log("worked: ", response);
            localStorage.setItem('token', response.data.access_token);
            window.location.reload();
          })
          .catch(error => {
            console.log("here: ", error.response);
            localStorage.setItem('errorMessage', error.response.data.message);
            window.location.reload()
          });
          this.props.onSuccessfulLogin();
    }

    onSubmitSignUp(event){
        event.preventDefault()
        this.setState()
    }

    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }

    getErrorMessage() {
        const errorMessage = localStorage.getItem('errorMessage');
        return errorMessage;
    }
    
    render(){
        return(
            <div>
                <div>
                <div className="container clear-top">
                <form onSubmit={this.submitForm.bind(this)}>
                    <legend>SIGN IN</legend>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input className="form-control" 
                        type="text" name="username" 
                        id="username" 
                        placeholder="USERNAME"  
                        value={this.state.username}
                        onChange={this.handleUsernameChanged.bind(this)}
                        required />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input className="form-control" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="PASSWORD"
                        value={this.state.password}
                        onChange={this.handlePasswordChanged.bind(this)}
                        required />
                    </div>
                    <br />
                    <div className="form-group">
                        <p className="text-center"></p>
                    </div>
                    <div className="text-center form-group">
                        <input className="btn btn-success btn-xl" 
                        type="submit" 
                        name="submit"
                        value="LOGIN"
                        />
                    </div>
                </form>
                <form onSubmit={this.onSubmitSignUp.bind(this)}>
                    <div className="text-center form-group">
                            <input className="btn btn-info btn-xl" 
                            type="submit" 
                            name="submit"
                            value="SIGNUP"
                            />
                            <ul>
                                <li><Link to="/signup">SIGNUP</Link></li>
                            </ul>
                    </div>
                </form>
                </div>
                </div>
            </div>
        );
    }
};

export default LoginForm;