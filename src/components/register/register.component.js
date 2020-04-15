import React, {Component} from 'react';
import './register.styles.css';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="heading">Register</div>
                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="username" className="label">Username</label>
                        <input type="text" className="form-control form-control-md name" id="username"
                               aria-describedby="username"/>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm">
                            <label htmlFor="fName" className="label">First Name</label>
                            <input type="text" className="form-control form-control-md name" id="fName"
                                   aria-describedby="fName"/>
                        </div>
                        <div className="col-sm">
                            <label htmlFor="lName" className="label">Last Name</label>
                            <input type="text" className="form-control form-control-md name" id="lName"
                                   aria-describedby="lName"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control form-control-md email" id="email"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control form-control-md password" id="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control form-control-md password" id="confirmPassword"/>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm">
                            <button type="submit" className="btn btn-primary btn-lg signup-button">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;