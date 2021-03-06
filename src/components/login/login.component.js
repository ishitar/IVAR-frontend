import React, {Component} from 'react';
import './login.styles.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="heading">Login</div>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Username or Email</label>
                        <input type="email" className="form-control form-control-md email" id="email"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control form-control-md password" id="password"/>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <button type="submit" className="btn btn-primary btn-lg login-button">Login</button>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <button type="submit" className="btn btn-primary btn-lg login-google-button">Login using
                                Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;