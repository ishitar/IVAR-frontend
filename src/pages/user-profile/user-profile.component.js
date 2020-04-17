import React from 'react';
import './user-profile.styles.css';

const UserProfile = () => {
	return (
		<div class="profile">
			<div class="row fit-content">
				<div class="col-8 image-container">
					<img
						src="https://uploads.scratch.mit.edu/users/avatars/25687607.png"
						class="rounded-circle img-fluid"
						alt="..."
						height="250px"
						width="250px"
					/>
				</div>
				<div class="col-3 edit-button-container">
					<button class="btn btn-outline-primary">
						<span class="fas fa-pen" />
					</button>
				</div>
			</div>
			<div class="row fit-content">
				<div class="col-8 bio-container">
					<p class="bio">Yolo Solo!!! Yolo Solo!!! Yolo Solo!!! Yolo Solo!!! Yolo Solo!!! Yolo Solo!!!</p>
				</div>
			</div>
			<table class="table">
				<tbody>
					<tr>
						<td>Posts: 0</td>
						<td />
						<td>Pokes: 0</td>
					</tr>
					<tr>
						<td>Followers: 0</td>
						<td>Sugar Cubes: 0</td>
						<td>Following: 0</td>
					</tr>
				</tbody>
			</table>
			{/* <hr /> */}
			<div class="container">
				<div class="row">
					<div class="col-4">
						<div class="image-container">
							<img
								src="https://imvaluers.com/wp-content/uploads/2017/07/Angry-Bird-300x3001.png"
								class="rounded img-fluid posted-images"
								alt="..."
							/>
						</div>
					</div>
					<div class="col-4">
						<div class="image-container">
							<img
								src="https://static-cdn.jtvnw.net/jtv_user_pictures/1828b791-8e48-40ba-b616-d8eae8921c94-profile_image-300x300.png"
								class="rounded img-fluid posted-images"
								alt="..."
							/>
						</div>
					</div>
					<div class="col-4">
						<div class="image-container">
							<img
								src="https://c.ekstatic.net/media/beating-boredom-300x300-202-30011.jpg?h=mGxQe8oHiICh273xpyb9Hw"
								class="rounded img-fluid posted-images"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
