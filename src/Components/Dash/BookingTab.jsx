import React, { useState } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import RequestBTn from "./RequestBTn";

const BookingTab = () => {
	const [bookings, setBookings] = useState([]);

	const AddBooking = (booking) => {
		setBookings([...bookings, booking]);
	};

	return (
		<div className="w-100 h-100">
			<RequestBTn AddBooking={AddBooking} />
			<div className="row h-100 w-100 text-center bg-dark">
				{bookings.map((booking) => {
					return (
						<div className="text-center mb-5 bg-dark w-100">
							<Card body className="w-100">
								<CardTitle className="w-100 text-left mb-2">
									status: {booking.status}
								</CardTitle>
								<CardText>
									<h3>
										<b>{booking.eventDate}</b>
									</h3>
									<p>
										Time: {booking.startTime} - {booking.endTime}
									</p>
									<p>Number of Hubs: {booking.numberOfHubs} @ R 20.00 p/h</p>
									<table className="table table-striped">
										<thead className="font-weight-bold">
											<tr>
												<td>Flavours</td>
												<td>Units</td>
												<td>R per unit</td>
											</tr>
										</thead>
										<tbody>
											{booking.flvs.map((flv) => {
												return (
													<tr>
														<td>{flv.name}</td>
														<td>{flv.amount}</td>
														<td>R 60.00</td>
													</tr>
												);
											})}
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
					);
				})}
			</div>
		</div>
	);
};

export default BookingTab;
