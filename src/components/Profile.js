import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { handleLogout } = props;
    const { exp, id, name, email } = props.user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();
    console.log(String(expirationTime));

    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login again.');
    }
    const userData = props.user ? (
		<div className="profile__content col-4">
			<div className="row pb-5">
				<h1 className="profile__header col-12">
					<i>Profile</i>
				</h1>
				<div className="profile__info py-3 my-3">
					<p className="col fs-4">
						<strong>Name:</strong>{" "}
						{name}
					</p>
					<p className="col fs-4">
						<strong>Email:</strong>{" "}
						{email}
					</p>
				</div>
				{/* <div className="edit__link col-6">
					<Link
						className="btn"
						to="profile/edit"
					>
						Edit Profile
					</Link>
				</div> */}
			</div>
		</div>
	) : (
		<h4>Loading...</h4>
	);

	const errorDiv = () => {
		return (
			<div className="text-center pt-4">
				<h3>
					Please{" "}
					<Link to="/login">login</Link>{" "}
					to view this page
				</h3>
			</div>
		);
	};

	return (
		<div className="profile__wrapper container-fluid p-5">
			{props.user ? userData : errorDiv()}
		</div>
	);
};

export default Profile;