import React from 'react';
import './user-profile-table.styles.css';

const UserProfileTable = ({ posts, followers, following }) => {
	return (
		<table className="table">
			<tbody>
				<tr>
					<td>Posts: {posts ? posts.length : 0}</td>
					<td />
					<td>Pokes: 0</td>
				</tr>
				<tr>
					<td>Followers: {followers}</td>
					<td>Sugar Cubes: 0</td>
					<td>Following: {following}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default UserProfileTable;
