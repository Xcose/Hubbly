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
	Media,
} from "reactstrap";

import John from "../../Images/happy.jpg";
import Jane from "../../Images/woman.jpg";

function Testimonials() {
	return (
		<div className="p-5 text-center" id="testimonal">
			<p class="display-4 text-center my-5 font-weight-bold">
				Who have we worked with?
			</p>
			<Media className="row my-5 m-lg-5">
				<Media left className="col-12 col-lg-2">
					<Media
						object
						src={John}
						alt="Generic placeholder image"
						className="w-100 media-img"
					/>
				</Media>
				<Media body className="col-12 col-lg-10 text-lg-left">
					<Media heading>John Doe</Media>
					<p className="text-muted">
						"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
						scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
						in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
						nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					</p>
				</Media>
			</Media>
			<Media className="row my-5 m-lg-5">
				<Media left className="col-12 col-lg-2">
					<Media
						object
						src={Jane}
						alt="Generic placeholder image"
						className="w-100 media-img"
					/>
				</Media>
				<Media body className="col-12 col-lg-10 text-lg-left">
					<Media heading>Jane Doe</Media>
					<p className="text-muted">
						"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
						scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
						in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
						nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					</p>
				</Media>
			</Media>
			<Media className="row my-5 m-lg-5">
				<Media left href="#" className="col-12 col-lg-2">
					<Media
						object
						src={John}
						alt="Generic placeholder image"
						className="w-100 media-img"
					/>
				</Media>
				<Media body className="col-12 col-lg-10 text-lg-left">
					<Media heading>John Doe</Media>
					<p className="text-muted">
						"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
						scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
						in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
						nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					</p>
				</Media>
			</Media>
		</div>
	);
}

export default Testimonials;
