import React, { Component } from 'react';
import './user-profile.styles.css';
import ProfilePost from '../../components/profile-post/profile-post.component';
import ProfileImageAndBio from '../../components/profile-image-and-bio/profile-image-and-bio.component';
import UserProfileTable from '../../components/user-profile-table/user-profile-table.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

class UserProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			loading: true
		};
	}

	componentDidMount() {
		let url = `https://ivar-go.herokuapp.com/users${this.props.match.path}`;
		fetch(url).then((res) => res.json()).then((data) =>
			this.setState({
				posts: data,
				loading: false
			})
		);
	}

	render() {
		const { FollowerCount, FollowingCount, Posts } = this.state.posts;
		const { loading } = this.state;
		return (
			<div className="profile">
				<ProfileImageAndBio />
				<UserProfileTable posts={Posts} followers={FollowerCount} following={FollowingCount} />
				{loading ? (
					<LoadingSpinner />
				) : (
					<div className="container">
						<div className="row">
							{Posts ? (
								Posts.map((post) => <ProfilePost likesCount={post.LikesCount} key={post.ID} />)
							) : null}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default UserProfile;
