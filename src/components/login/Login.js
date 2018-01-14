import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import LoginForm from './LoginForm'

class LoginPage extends Component {

    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token && token.length > 10;
    }

    handleSuccessfulLogin(){
        this.setState();
    }

    render(){
        const isAlreadyAuthenticated = this.isAuthenticated();
        return(
            <div>
                { isAlreadyAuthenticated ? <Redirect to={{pathname: '/dashboard'}}/> : (
                <LoginForm onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} />
                )}
            </div>
        );
    }
};

export default LoginPage;