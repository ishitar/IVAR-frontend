import React from 'react';
import './profile-image-and-bio.styles.css';

const ProfileImageAndBio = () => {
	return (
		<>
			<div className="row fit-content">
				<div className="col-8 image-container">
					<img
						src="https://uploads.scratch.mit.edu/users/avatars/25687607.png"
						className="rounded-circle img-fluid"
						alt="..."
						height="250px"
						width="250px"
					/>
				</div>
				<div className="col-3 edit-button-container">
					<button className="btn btn-outline-primary">
						<span className="fas fa-pen" />
					</button>
				</div>
			</div>
			<div className="row fit-content">
				<div className="col-8 bio-container">
					<p className="bio">
						Yolo Solo!!! Yolo Solo!!! Yolo Solo!!! Yolo Solo!!! Yolo Solo!!! Yolo Solo!!! Yolo Solo!!!{' '}
					</p>
				</div>
			</div>
		</>
	);
};

export default ProfileImageAndBio;
