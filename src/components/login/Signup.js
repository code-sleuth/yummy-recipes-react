import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../utils/Constants';

// This component handles user signup
class SignupPage extends Component {
    constructor(){
        super();
        this.state = {
            userData:{username: "",fullname: "",email: "",password: "",confirmpassword: ""}
        }
    }

    //function to handle user input
    handleChange = (event) => {
        const field = event.target.id
        let userData = this.state.userData
        userData[field] = event.target.value
        this.setState({ userData })
    }

    // function to handle submitted form data
    submitForm = (event) => {
        event.preventDefault();
        const {userData} = this.state;
        if (userData.confirmpassword !== userData.password) {
            alert("Password not the same")
            return
        } else if(userData.password.length < 4){
            alert("Password too short")
            return
        }
        axios.post(BASE_URL+'auth/register', {
            username: userData.username,
            fullname: userData.fullname,
            email: userData.email,
            password: userData.password,
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
                                <input type="text" id="username" placeholder="USERNAME" className="form-control"
                                 onChange={this.handleChange}
                                 required 
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input type="text" id="fullname" placeholder="FULLNAME" className="form-control"
                                 onChange={this.handleChange}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" id="email" placeholder="EMAIL" className="form-control"
                                 onChange={this.handleChange}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" id="password" placeholder="PASSWORD" className="form-control"
                                 onChange={this.handleChange}
                                 required
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" id="confirmpassword" placeholder="CONFIRM PASSWORD" className="form-control"
                                 onChange={this.handleChange}
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