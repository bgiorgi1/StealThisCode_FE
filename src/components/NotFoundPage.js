import React from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
	return (
		<div className="container-fluid NFP">
		<div class="row">
			<div className="col-sm imgContainer">
			{/* <img
				className="img-responsive"
				width="304"
				height="236"
				src={PageNotFound}
				alt="shocked little girl"
			/> */}
			</div>
			<div className="col-sm">
				<h1>Sorry!</h1> <br />
				<p>This page isn't working</p>
				<br />
				<p
					style={{
						textAlign: "center",
					}}
				>
					<Link to="/">Go to Home</Link>
				</p>
			</div>
			</div>
		</div>
	);
};
export default NotFoundPage;