import React, { useState } from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	Label,
	Badge,
	FormFeedback,
} from "reactstrap";
import Validation from "../../Validation/BookingValidation";

const RequestBTn = ({ AddBooking }) => {
	const initailBooking = {
		eventDate: null,
		startTime: null,
		endTime: null,
		numberOfHubs: null,
		flvs: null,
		status: "pending",
	};
	const [modal, setModal] = useState(false);
	const [booking, setbooking] = useState(initailBooking);
	const [flavor, setFlavor] = useState("apple");
	const [qty, setQty] = useState(1);
	const [flavors, setFlavors] = useState([]);
	const [errors, setErrors] = useState({});

	const classText = () => {
		return "rounded-0 border-top-0 border-left-0 border-right-0";
	};

	const AddFlavour = () => {
		let found = false;
		let updateFlavours = flavors.map((flv) => {
			if (flv.name === flavor) {
				found = true;
				flv.amount = parseInt(flv.amount) + parseInt(qty);
			}
			return flv;
		});
		if (found) {
			setFlavors(updateFlavours);
			UpdateBookingFlavours(updateFlavours);
		} else {
			setFlavors([...flavors, { name: flavor, amount: qty }]);
			UpdateBookingFlavours([...flavors, { name: flavor, amount: qty }]);
		}
	};
	const RemoveFlavour = (flvToRemove) => {
		setFlavors(flavors.filter((flv) => flv.name !== flvToRemove));
	};

	const onChange = (e) => {
		let updatedBooking = booking;
		updatedBooking[e.target.name] = e.target.value;
		setbooking(updatedBooking);
	};

	const UpdateBookingFlavours = (newFLavours) => {
		let updatedBooking = booking;
		updatedBooking.flvs = newFLavours;
		setbooking(updatedBooking);
	};

	const validate = () => {
		const validationErrors = Validation(booking);

		if (Object.keys(validationErrors).length === 0) {
			onSubmit();
		} else {
			setErrors(validationErrors);
		}
	};

	const onSubmit = () => {
		AddBooking(booking);
		toggle();
		clear();
	};

	const clear = () => {
		setbooking(initailBooking);
		setFlavor("apple");
		setQty(1);
		setFlavors([]);
	};

	const toggle = () => setModal(!modal);
	return (
		<div>
			<Button color="secondary" onClick={toggle} className="mb-5">
				Book
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					<FormGroup>
						<Label>Date of event</Label>
						<Input
							{...(errors.eventDate ? { invalid: true } : {})}
							type="date"
							id=""
							defaultValue={booking.eventDate}
							onChange={(e) => {
								onChange(e);
							}}
							className={classText()}
							placeholder="Date"
							name="eventDate"
						/>
						<FormFeedback>{errors.eventDate}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label>Start time</Label>
						<Input
							{...(errors.startTime ? { invalid: true } : {})}
							type="time"
							id=""
							defaultValue={booking.startTime}
							onChange={(e) => {
								onChange(e);
							}}
							className={classText()}
							placeholder="Start time"
							name="startTime"
						/>
						<FormFeedback>{errors.startTime}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label>End time</Label>
						<Input
							{...(errors.endTime ? { invalid: true } : {})}
							type="time"
							id=""
							defaultValue={booking.endTime}
							onChange={(e) => {
								onChange(e);
							}}
							className={classText()}
							placeholder="End Time"
							name="endTime"
						/>
						<FormFeedback>{errors.endTime}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label>Number of hubs</Label>
						<Input
							{...(errors.numberOfHubs ? { invalid: true } : {})}
							type="number"
							id=""
							defaultValue={booking.numberOfHubs}
							onChange={(e) => {
								onChange(e);
							}}
							className={classText()}
							placeholder="Number of hubs"
							name="numberOfHubs"
						/>
						<FormFeedback>{errors.numberOfHubs}</FormFeedback>
					</FormGroup>
					<InputGroup>
						<Input
							{...(errors.flvs ? { invalid: true } : {})}
							type="select"
							id=""
							className={classText()}
							name="Flavour"
							onChange={(e) => {
								setFlavor(e.target.value);
							}}
						>
							<option value="apple">Apple</option>
							<option value="Banana">Banana</option>
							<option value="Grape">Grape</option>
							<option value="Mango">Mango</option>
						</Input>
						<Input
							{...(errors.flvs ? { invalid: true } : {})}
							type="number"
							id=""
							placeholder="Quantity"
							defaultValue={qty}
							onChange={(e) => {
								setQty(e.target.value);
							}}
							className={classText()}
							name="qty"
						/>

						<InputGroupAddon addonType="append">
							<Button
								onClick={() => {
									AddFlavour();
								}}
							>
								Add
							</Button>
						</InputGroupAddon>
						<FormFeedback>{errors.flvs}</FormFeedback>
					</InputGroup>
					<div>
						{flavors.map((flv) => (
							<Badge
								color="success"
								pill
								onClick={() => {
									RemoveFlavour(flv.name);
								}}
								className="mr-2"
							>
								{flv.name} {flv.amount}
							</Badge>
						))}
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={validate}>
						Book
					</Button>{" "}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default RequestBTn;
