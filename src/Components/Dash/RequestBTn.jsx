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
} from "reactstrap";

const RequestBTn = () => {
	const [modal, setModal] = useState(false);

	const [flavor, setFlavor] = useState("apple");
	const [qty, setQty] = useState(1);
	const [flavors, setFlavors] = useState([]);

	const classText = (error) => {
		return `rounded-0 border-top-0 border-left-0 border-right-0 ${
			error ? "is-invalid" : ""
		}`;
	};

	const AddFlavour = () => {
		let found = false;
		let updateFlavours = flavors.map(flv =>{
			if(flv.name === flavor)
			{
				found = true;
				flv.amount = flv.amount + qty;
			}
			return flv;
		})
		if (found)
		{
			setFlavors(updateFlavours);
		}
		else{
			setFlavors([...flavors, { name: flavor, amount: qty }])
		}
	};
	const RemoveFlavour = (flvToRemove) => {
		setFlavors(flavors.filter((flv) => flv.name !== flvToRemove));
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
							type="date"
							id=""
							className={classText(null)}
							placeholder="Date"
							name="date"
						/>
						{/* {validationErrors.username && (
							<Tooltip placement="right" isOpen={true} target="LoginUsername">
								{validationErrors.username}
							</Tooltip>
						)} */}
					</FormGroup>
					<FormGroup>
						<Label>Start time</Label>
						<Input
							type="time"
							id=""
							className={classText(null)}
							placeholder="Start time"
							name="date"
						/>
					</FormGroup>
					<FormGroup>
						<Label>End time</Label>
						<Input
							type="time"
							id=""
							className={classText(null)}
							placeholder="End Time"
							name="date"
						/>
					</FormGroup>
					<FormGroup>
						<Label>Number of hubs</Label>
						<Input
							type="number"
							id=""
							className={classText(null)}
							defaultValue="1"
							placeholder="Number of hubs"
							name="date"
						/>
					</FormGroup>
					<InputGroup>
						<Input
							type="select"
							id=""
							className={classText(null)}
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
							type="number"
							id=""
							placeholder="Quantity"
							defaultValue={qty}
							onChange={(e) => {
								setQty(e.target.value);
							}}
							className={classText(null)}
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
					<Button color="primary" onClick={toggle}>
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
