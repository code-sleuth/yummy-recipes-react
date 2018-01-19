import React, { Component } from 'react';
import axios from 'axios'

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

    handleUsernameChanged(event){
        this.setState({username: event.target.value});
    }

    handleFullnameChanged(event){
        this.setState({fullname: event.target.value})
    }

    handleEmailChanged(event){
        this.setState({email: event.target.value});
    }

    handlePasswordChanged(event){
        this.setState({password: event.target.value});
    }

    handleConfirmPasswordChanged(event){
        this.setState({confirmpassword: event.target.value});
    }

    submitForm(event){
        event.preventDefault();
        if (this.state.confirmpassword !== this.state.password) {
            console.log("Password not the same")
            return
        } else if(this.state.password.length < 4){
            console.log("Password too short")
            return
        }
        axios.post('http://127.0.0.1:5000/auth/register', {
            username: this.state.username,
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
        })
        .then(response => {
            alert("Response: " + response.data.message)
        })
        .catch(error => {
            alert("Error: " + error.response)
        })
        this.setState();
    }
    render(){
        
        return(
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">SIGN UP</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.submitForm.bind(this)}>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-eye-open"></i></span>
                                <input type="text" name="username" placeholder="USERNAME" className="form-control"
                                 value={this.state.username} 
                                 onChange={this.handleUsernameChanged.bind(this)}
                                 required 
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input type="text" name="fullname" placeholder="FULLNAME" className="form-control"
                                 value={this.state.fullname}
                                 onChange={this.handleFullnameChanged.bind(this)}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" name="email" placeholder="EMAIL" className="form-control"
                                 value={this.state.email}
                                 onChange={this.handleEmailChanged.bind(this)}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" name="password" placeholder="PASSWORD" className="form-control"
                                 value={this.state.password}
                                 onChange={this.handlePasswordChanged.bind(this)}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" name="confirmpassword" placeholder="CONFIRM PASSWORD" className="form-control"
                                 value={this.state.confirmpassword}
                                 onChange={this.handleConfirmPasswordChanged.bind(this)}
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