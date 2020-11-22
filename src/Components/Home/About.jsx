import React from "react";
import { Row, Col } from "reactstrap";

import IMG from "../../Images/friendship.jpg";

function About() {
	return (
		<div className="p-5 text-center" id="about">
			<p class="display-4 text-center my-5 font-weight-bold">Who are we?</p>
			<div className="lead">
				<Row className="justify-content-around">
					<Col sm="12" lg="10">
						<p className="text-center m-lg-5 text-muted">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Reiciendis dolores corporis modi, est illo nesciunt quod quo ullam
							delectus eos laudantium excepturi voluptas, facere asperiores
							consequuntur assumenda velit in mollitia?
						</p>
					</Col>
				</Row>
				<Row className="justify-content-around">
					<Col sm="12" lg="8">
						<img src={IMG} alt="Who are we" className="w-100" />
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default About;
