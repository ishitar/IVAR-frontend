import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/landing/landing.component';
import Login from './components/login/login.component';
import Register from './components/register/register.component';
import UserProfile from './pages/user-profile/user-profile.component';

class App extends Component {
	render() {
		return (
			<div className="content">
				<Header loggedIn={true} />
				<Navbar loggedIn={true} />
				<div className="main-content">
					<div className="main-container">
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/Tak1" component={UserProfile} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
