import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {BASE_URL, LOGIN_URL, Authenticated} from '../../utils/Constants';
import Link from 'react-router-dom/Link';

class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            Auth: ''
        }
    }

    handleUsernameChanged = (event) => {
        this.setState({username: event.target.value});
        
    }

    handlePasswordChanged = (event) => {
        this.setState({password: event.target.value});
    }

    componentDidMount(){
        this.setState({Auth: Authenticated})
    }

    

    submitForm = (event) => {
        event.preventDefault();
        axios.post(BASE_URL + LOGIN_URL, {
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
    }

    onSubmitSignUp = (event) => {
        event.preventDefault()
        this.setState()
    }
    
    render(){
        return(
            <div>
                { this.state.Auth ? <Redirect to={{pathname: '/categories'}}/> : (
                <div>
                <div className="container clear-top">
                <form onSubmit={this.submitForm}>
                    <legend>SIGN IN</legend>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input className="form-control" 
                        type="text" name="username" 
                        id="username" 
                        placeholder="USERNAME"  
                        value={this.state.username}
                        onChange={this.handleUsernameChanged}
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
                        onChange={this.handlePasswordChanged}
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
                <br />
                    <div className="text-center form-group">
                        <Link to='/signup'>SIGNUP</Link>
                    </div>
                </div>
                </div>
                )}
            </div>
        );
    }
};

export default LoginForm;