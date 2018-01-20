import React, { Component } from 'react';
import Navbar from '../common/Navbar';

class User extends Component {
    render(){
        return(
            <div>
            <Navbar />
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">EDIT USER DETAILS</h4>
                        </div>
                        <div className="modal-body">
                            <form action="/update_user" method="POST">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-eye-open"></i></span>
                                    <input type="text" name="username" placeholder="USERNAME" className="form-control" id="username" value="" required disabled />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input type="text" name="fullname" placeholder="FULLNAME" className="form-control" id="username" value="" required disabled />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input type="email" name="email" placeholder="EMAIL" className="form-control" id="email" value="" required disabled />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input type="password" name="password" placeholder="PASSWORD" className="form-control" id="password" value="" required disabled />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input type="password" name="confirmpassword" placeholder="CONFIRM PASSWORD" className="form-control" id="confrimpassword" value="" required disabled />
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-info btn-md" type="submit" id="updateuser" value="UPDATE ACCOUNT INFO" disabled />
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