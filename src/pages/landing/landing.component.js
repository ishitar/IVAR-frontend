import React from 'react';
import {withRouter} from 'react-router-dom';
import './landing-style.css';

const LandingPage = (props) => (
    <div className="landing-page">
        <h1>Landing Page</h1>
        <div className="button-group">
            <button className="btn btn-primary" onClick={() => props.history.push('/login')}>Login</button>
            <button className="btn btn-primary" onClick={() => props.history.push('/register')}>Register</button>
        </div>
    </div>
);

export default withRouter(LandingPage);