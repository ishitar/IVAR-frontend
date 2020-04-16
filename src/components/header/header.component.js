import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = ({ loggedIn }) => (
	<div className="header-bar">
		<Link to="/" className="logo-link">
			<h1 className="logo">ivar</h1>
		</Link>
		{loggedIn ? (
			<div className="signout-button">
				<button className="btn btn-outline-primary signout-button-icon">
					<span className="fas fa-sign-out-alt" />
				</button>
			</div>
		) : null}
	</div>
);

export default Header;
