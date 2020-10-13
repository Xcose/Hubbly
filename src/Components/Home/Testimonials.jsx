import React from "react";
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardDeck,
	CardSubtitle,
	CardBody,
} from "reactstrap";

import testIMG from "../../Images/Idea.jpg";

function Testimonials() {
	return (
		<div className="p-5 text-center" id="testimonal">
			<p class="display-4 text-center my-5 font-weight-bold">Testimonials</p>
			<p className=" lead text-justify m-lg-5">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
				dolores corporis modi, est illo nesciunt quod quo ullam delectus eos
				laudantium excepturi voluptas, facere asperiores consequuntur assumenda
				velit in mollitia?
			</p>
			<CardDeck className="mt-5">
				<Card className="border-0">
					<div className="d-flex justify-content-center text-center mx-auto">
						<img
							src={testIMG}
							style={{ width: "50%" }}
							className="rounded-circle z-depth-1 img-fluid"
						/>
					</div>
					<CardBody>
						<CardTitle className="h3 text-muted font-weight-bold mt-4">
							John Doe
						</CardTitle>
						<CardSubtitle className="text-primary h4 font-weight-bold my-3">
							Type of Event
						</CardSubtitle>
						<CardText className="text-center text-grey">
							This card has supporting text below as a natural lead-in to
							additional content.
						</CardText>
					</CardBody>
				</Card>
				<Card className="border-0">
					<div className="d-flex justify-content-center text-center mx-auto">
						<img
							src={testIMG}
							style={{ width: "50%" }}
							className="rounded-circle z-depth-1 img-fluid"
						/>
					</div>
					<CardBody>
						<CardTitle className="h3 text-muted font-weight-bold mt-4">
							John Doe
						</CardTitle>
						<CardSubtitle className="text-primary h4 font-weight-bold my-3">
							Type of Event
						</CardSubtitle>
						<CardText className="text-center text-grey">
							This card has supporting text below as a natural lead-in to
							additional content.
						</CardText>
					</CardBody>
				</Card>
				<Card className="border-0">
					<div className="d-flex justify-content-center text-center mx-auto">
						<img
							src={testIMG}
							style={{ width: "50%" }}
							className="rounded-circle z-depth-1 img-fluid"
						/>
					</div>
					<CardBody>
						<CardTitle className="h3 text-muted font-weight-bold mt-4">
							John Doe
						</CardTitle>
						<CardSubtitle className="text-primary h4 font-weight-bold my-3">
							Type of Event
						</CardSubtitle>
						<CardText className="text-center text-grey">
							This card has supporting text below as a natural lead-in to
							additional content.
						</CardText>
					</CardBody>
				</Card>
			</CardDeck>
		</div>
	);
}

export default Testimonials;
