import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./components/login/login.component";
import Register from "./components/register/register.component";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        component={Login}
                    />
                    <Route
                        exact
                        path="/register"
                        component={Register}/>
                </Switch>
            </div>
        )
    }
}

export default App;