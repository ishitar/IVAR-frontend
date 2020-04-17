import React from 'react';
import './profile-post.styles.css';

const ProfilePost = ({ post, likesCount, CommentsCount }) => {
	return (
		<div className="col-4">
			<div className="image-container">
				<img
					src="https://c.ekstatic.net/media/beating-boredom-300x300-202-30011.jpg?h=mGxQe8oHiICh273xpyb9Hw"
					className="rounded img-fluid"
					alt="..."
				/>
			</div>
		</div>
	);
};

export default ProfilePost;
