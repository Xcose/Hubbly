import React, { useState } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import RequestBTn from "./RequestBTn";

const BookingTab = () => {

	const [bookings, setBookings] = useState([]);

	const AddBooking = (booking) => {
		setBookings([...bookings, booking]);
	}

	return (
		<div className="w-100 h-100 p-5">
			{/* <Button className="mb-5">Booking</Button> */}
			<RequestBTn AddBooking={AddBooking}/>
			<div className="row h-100">
				{bookings.map(booking => {
					return (
				<div className="col-12 col-lg-4 text-center mb-5">
					<Card body>
						<CardTitle className="w-100 text-left mb-2">
							status: {booking.status}
							<small className="float-right font-weight-bold">
								{booking.eventDate}
							</small>
						</CardTitle>
						<CardText>
							<h3>
								<b>Event Type</b>
							</h3>
							<p>Time: {booking.startTime} - {booking.endTime}</p>
							<p>Number of Hubs: {booking.numberOfHubs} @ R 20.00 p/h</p>
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
									{booking.flvs.map(flv =>{
										return(
										<tr>
											<td>{flv.name}</td>
											<td>{flv.amount}</td>
											<td>R 60.00</td>
										</tr>
										)
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
				)})}
			</div>
		</div>
	);
};

export default BookingTab;
