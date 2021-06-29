import setAuthToken from "../utils/setAuthToken";
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const REACT_APP_SERVER_URL =
	process.env.REACT_APP_SERVER_URL;

const Edit = (props) => {
	// pulling down user info and handleLogout() from App.jsx
	const { id, name, email } = props.user;
	const { handleLogout } = props;

	// set up values and mutators for redirecting user on edit or delete
	const [redirect, setRedirect] =
		useState(false);
	const [destroy, setDestroy] = useState(false);

	// functions to change value of email or name
	const handleName = (e) => {
		props.setUser({
			...props.user,
			name: e.target.value,
		});
	};

	const handleEmail = (e) => {
		props.setUser({
			...props.user,
			email: e.target.value,
		});
	};
	// function to submit edit infomation to backend
	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			id,
			name,
			email,
		};
		let url = `${REACT_APP_SERVER_URL}/api/users/profile/edit`;
		// passes token to backend to confirm user has access to this function
		await setAuthToken(
			localStorage.getItem("jwtToken")
		);
		axios
			.put(url, payload)
			.then(async (response) => {
				await setRedirect(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	if (redirect)
		return <Redirect to="/profile" />;

	// function to submit delete infomation to backend
	const handleDelete = async (e) => {
		e.preventDefault();
		const content = {
			id,
		};
		let url = `${REACT_APP_SERVER_URL}/api/users/profile/edit`;
		await setAuthToken(
			localStorage.getItem("jwtToken")
		);
		axios
			.delete(url, { data: content })
			.then(async (response) => {
				await setDestroy(true);
				handleLogout();
				// invokes handleLogout() function so user does not have access to private routes after deleting account
			})
			.catch((error) => {
				console.log(error);
			});
	};
	if (destroy) return <Redirect to="/" />;

	return (
		<div className="container-fluid edit__wrapper">
			<div className="row py-2">
				<div>
					<button
						className="col-2 float-end btn delete-btn"
						onClick={handleDelete}
					>
						Delete Account
					</button>
				</div>
			</div>
			<div className="row">
				<h1 className="col text-center">
					Edit
				</h1>
			</div>
			<hr></hr>
			<div className="row">
				<p className="edit_info fs-4 text-center">
					<em>
						Replace all input fields
						you wish to update and hit
						submit.
					</em>
				</p>
			</div>
			<div className="row justify-content-center">
				<form
					className="edit__form mb-5 col-5"
					onSubmit={handleSubmit}
				>
					<div className="form-group text-center my-3 fs-5">
						<label
							className="group__label px-2"
							htmlFor="name"
						>
							New Name
						</label>
						<input
							type="text"
							name="name"
							onChange={(e) =>
								handleName(e)
							}
							value={name}
							// autofills the value to current user data so null info is not sent to backend
						></input>
					</div>
					<div className="form-group text-center my-3 fs-5">
						<label
							className="group__label px-2"
							htmlFor="email"
						>
							New Email
						</label>
						<input
							type="text"
							name="email"
							onChange={(e) =>
								handleEmail(e)
							}
							value={email}
						></input>
					</div>
					<div className="text-center my-3">
						<button
							className="btn edit__submit"
							type="submit"
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Edit;