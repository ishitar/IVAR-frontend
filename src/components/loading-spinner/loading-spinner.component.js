import React from 'react';
import './loading-spinner.styles.css';

const LoadingSpinner = () => {
	return (
		<div className="loader center">
			<i className="fa fa-cog fa-spin" />
		</div>
	);
};

export default LoadingSpinner;
