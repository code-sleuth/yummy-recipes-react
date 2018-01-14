import React from 'react';

const SignupPage = () => {
    return(
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">SIGN UP</h4>
                </div>
                <div className="modal-body">
                    <form action="/add_user" method="POST">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-eye-open"></i></span>
                            <input type="text" name="username" placeholder="USERNAME" className="form-control" id="username" required />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input type="text" name="fullname" placeholder="FULLNAME" className="form-control" id="fullname" required />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                            <input type="email" name="email" placeholder="EMAIL" className="form-control" id="email" required />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input type="password" name="password" placeholder="PASSWORD" className="form-control" id="password" required />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input type="password" name="confirmpassword" placeholder="CONFIRM PASSWORD" className="form-control" id="confirmpassword" required />
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
};

export default SignupPage;