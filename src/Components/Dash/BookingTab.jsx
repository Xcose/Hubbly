import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import RequestBTn from "./RequestBTn";

const BookingTab = () => {
	return (
		<div className="w-100 h-100 p-5">
			{/* <Button className="mb-5">Booking</Button> */}
			<RequestBTn />
			<div className="row h-100">
				<div className="col-12 col-lg-4 text-center mb-5">
					<Card body>
						<CardTitle className="w-100 text-left mb-2">
							status: pending
							<small className="float-right font-weight-bold">
								1 January 2020
							</small>
						</CardTitle>
						<CardText>
							<h3>
								<b>Event Type</b>
							</h3>
							<p>Time: 11:00 - 23:00</p>
							<p>Number of Hubs: 5 @ R 20.00 p/h</p>
							{/* <p className="lead">Flavours:</p> */}
							<table className="table table-striped">
								<thead className="font-weight-bold">
									<tr>
										<td>Flavours</td>
										<td>Units</td>
										<td>R per unit</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Orange</td>
										<td>2</td>
										<td>R 60.00</td>
									</tr>
									<tr>
										<td>Banana</td>
										<td>2</td>
										<td>R 60.00</td>
									</tr>
									<tr>
										<td>Apple</td>
										<td>2</td>
										<td>R 60.00</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan="2">
											<b>Total</b>
										</td>
										<td>
											<b>R 1560.00</b>
										</td>
									</tr>
								</tfoot>
							</table>
						</CardText>
						<Button>Request Extention</Button>
					</Card>
				</div>
				<div className="col-12 col-lg-4 text-center mb-5">
					<Card body>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</div>
				<div className="col-12 col-lg-4 text-center mb-5">
					<Card body>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</div>
				<div className="col-12 col-lg-4 text-center mb-5">
					<Card body>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</div>
				<div className="col-12 col-lg-4 text-center mb-5">
					<Card body>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</div>
				<div className="col-12 col-lg-4 text-center mb-5">
					<Card body>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>
							With supporting text below as a natural lead-in to additional
							content.
						</CardText>
						<Button>Go somewhere</Button>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default BookingTab;
