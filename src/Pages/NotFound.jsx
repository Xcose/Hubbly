import React from "react";
import Navigation from "../Components/Shared/Navigation";

const NotFound = () => {
	return (
		<>
			<Navigation />
			<div className="d-flex justify-content-center align-items-center h-100">
				<p className="display-1">
					<b>404</b> Page Not Found
				</p>
			</div>
		</>
	);
};

export default NotFound;
