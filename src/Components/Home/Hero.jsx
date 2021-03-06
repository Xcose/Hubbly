import React from "react";
import { Jumbotron, Button } from "reactstrap";
import BGI from "../../Images/Idea.jpg";
import Navigation from "../Shared/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

function Hero() {
	return (
		<Jumbotron
			style={{
				height: "100vh",
				background: `url(${BGI})  no-repeat center center fixed`,
				backgroundSize: "cover",
			}}
			className="w-100 rounded-0 p-0"
		>
			<div className="text-center h-100 w-100">
				<Navigation home={true} />
				<div className="h-100 d-flex align-items-center justify-content-center justify-content-lg-start px-5 mx-5">
					<div className="text-lg-left">
						<fieldset className="p-5">
							<legend className="subHeading text-white m-0 p-0">
								It's our business to make you have fun
							</legend>
							<h1 className="display-1 text-white heading font-weight-bold px-0">
								Hubbly
							</h1>
							<Link to="/#about">
								<Button
									className="text-center btn-white border-0 mt-2 mt-lg-5"
									id="call-to-action"
								>
									Book A Good Time
								</Button>
							</Link>
						</fieldset>
					</div>
				</div>
			</div>
		</Jumbotron>
	);
}

export default Hero;
