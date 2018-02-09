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

    // function to handle username input changed
    handleUsernameChanged = (event) => {
        this.setState({username: event.target.value});
    }

    // function to handle password input change
    handlePasswordChanged = (event) => {
        this.setState({password: event.target.value});
    }

    // life cycle method 
    // changes value of auth in state
    componentDidMount(){
        this.setState({Auth: Authenticated})
    }

    // function called when user submits login form
    submitForm = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        axios.post(BASE_URL + LOGIN_URL, {
            username: username,
            password: password
          })
          .then(response  => {
            localStorage.setItem('token', response.data.access_token);
            window.location.reload();
          })
          .catch(error => {
            localStorage.setItem('errorMessage', error.response.data.message);
            window.location.reload()
          });
    }

    // funtion to render jsx
    render(){
        const {Auth, username, password} = this.state;
        return(
            <div>
                { Auth ? <Redirect to={{pathname: '/categories'}}/> : (
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
                        value={username}
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
                        value={password}
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