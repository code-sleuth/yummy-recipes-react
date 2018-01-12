import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class LoginPage extends Component {
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
          })
          .catch(error => {
            console.log("here: ", error.response);
            localStorage.setItem('errorMessage', error.response.data.message);
          });
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
        const isAlreadyAuthenticated = this.isAuthenticated();
        const errorMessage = this.getErrorMessage();
        console.log(errorMessage);
        return(
            <div className="container clear-top">
            { isAlreadyAuthenticated ? <Redirect to={{pathname: '/dashboard'}}/> : (
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
                        <p className="text-center">{errorMessage}</p>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-success btn-md" 
                        type="submit" 
                        name="submit"
                        value="LOGIN"
                        />
                    </div>
                </form>
            )}
        </div>
        );
    }
};

export default LoginPage;