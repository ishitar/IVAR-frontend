import React from 'react';
import './profile-post.styles.scss';

const ProfilePost = ({ likesCount }) => {
	return (
		<div className="col-4">
			<div className="image-container">
				<img
					src="https://c.ekstatic.net/media/beating-boredom-300x300-202-30011.jpg?h=mGxQe8oHiICh273xpyb9Hw"
					className="rounded img-fluid image"
					alt="..."
				/>
				<div className="likesAndComments">
					{likesCount} <i class="far fa-heart" /> {likesCount}
					<i class="far fa-comment" />
				</div>
			</div>
		</div>
	);
};

export default ProfilePost;
