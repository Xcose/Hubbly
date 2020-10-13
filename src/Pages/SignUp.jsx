import React, { useState } from "react";
import Validation from "../Validation/PersonalInfoValidation";
import firebaseApp from "../firebase";
import Navigation from "../Components/Shared/Navigation";
import { FormGroup, Input, Button, Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import {
	SuccessMessage,
	ErrorMessage,
} from "../Components/Shared/Notifications";

function SignUp() {
	let defaultData = {
		name: null,
		surname: null,
		email: null,
		mobile: null,
		password: null,
		confirmPassword: null,
	};

	const [isLoading, setIsLoading] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const toggle = () => setTooltipOpen(!tooltipOpen);
	const [personalInformation, setPersonalInformation] = useState(defaultData);
	const [errors, setErrors] = useState({});

	const classText = (error) => {
		return `rounded-0 input border-top-0 border-left-0 border-right-0 ${
			error ? "is-invalid" : ""
		}`;
	};

	const onPersonalChange = (e) => {
		let UpdatedPersonalInformtion = personalInformation;
		UpdatedPersonalInformtion[e.target.name] = e.target.value;
		setPersonalInformation(UpdatedPersonalInformtion);
	};

	const Validate = () => {
		const validationErrors = Validation(personalInformation);

		if (Object.keys(validationErrors).length === 0) {
			OnSumit();
		} else {
			setErrors(validationErrors);
		}
	};

	const OnSumit = async () => {
		// submit data to database
		try {
			//set loading to true
			setIsLoading(true);

			// create customer account
			const user = await firebaseApp
				.auth()
				.createUserWithEmailAndPassword(
					personalInformation.email,
					personalInformation.password
				);
			//Log customer in
			await firebaseApp
				.auth()
				.signInWithEmailAndPassword(
					personalInformation.email,
					personalInformation.password
				);

			// remove customer password from data
			delete personalInformation.password;
			delete personalInformation.confirmPassword;

			// add customer details to database
			await firebaseApp
				.firestore()
				.collection("people")
				.doc(user.user.uid)
				.set(personalInformation);

			// Show success notifcation
			const message =
				"Your order has been placed. Please see your email for more information";
			SuccessMessage(message);

			// send client an email
			// await emailjs.sendForm(
			// 	"smtp_server",
			// 	"order_template",
			// 	"#order_form",
			// 	"user_2NUlgzcOgBlL7JKjxQraj"
			// );
		} catch (err) {
			const message = err.message.toString();
			ErrorMessage(message);
		}
		setIsLoading(false);
	};

	return (
		<div className="h-100">
			<Navigation />
			<div className="row justify-content-center mb-5">
				<div className="col-12 col-lg-5 p-5-lg">
					<fieldset className="p-5">
						<legend className="h2 text-white text-center font-weight-bold bg-legend p-1">
							<strong className="">Personal Information</strong>
						</legend>
						<FormGroup>
							<Input
								type="text"
								id="Name"
								className={classText(errors.name)}
								defaultValue={personalInformation.name}
								onChange={(e) => {
									onPersonalChange(e);
								}}
								placeholder="Name e.g John"
								name="name"
							/>
							{errors.name && (
								<Tooltip
									placement="right"
									isOpen={true}
									target="Name"
									toggle={toggle}
								>
									{errors.name}
								</Tooltip>
							)}
						</FormGroup>
						<FormGroup>
							<Input
								type="text"
								id="Surname"
								className={classText(errors.surname)}
								defaultValue={personalInformation.surname}
								onChange={(e) => {
									onPersonalChange(e);
								}}
								placeholder="Surname"
								name="surname"
							/>
							{errors.surname && (
								<Tooltip
									placement="right"
									isOpen={true}
									target="Surname"
									toggle={toggle}
								>
									{errors.surname}
								</Tooltip>
							)}
						</FormGroup>
						<FormGroup>
							<Input
								type="text"
								id="Email"
								className={classText(errors.email)}
								defaultValue={personalInformation.email}
								onChange={(e) => {
									onPersonalChange(e);
								}}
								placeholder="Email"
								name="email"
							/>
							{errors.email && (
								<Tooltip
									placement="right"
									isOpen={true}
									target="Email"
									toggle={toggle}
								>
									{errors.email}
								</Tooltip>
							)}
						</FormGroup>
						<FormGroup>
							<Input
								type="text"
								id="Mobile"
								className={classText(errors.mobile)}
								defaultValue={personalInformation.mobile}
								onChange={(e) => {
									onPersonalChange(e);
								}}
								placeholder="Mobile #"
								name="mobile"
							/>
							{errors.mobile && (
								<Tooltip
									placement="right"
									isOpen={true}
									target="Mobile"
									toggle={toggle}
								>
									{errors.mobile}
								</Tooltip>
							)}
						</FormGroup>
						<FormGroup>
							<Input
								type="password"
								id="Password"
								className={classText(errors.password)}
								defaultValue={personalInformation.password}
								onChange={(e) => {
									onPersonalChange(e);
								}}
								placeholder="Password"
								name="password"
							/>
							{errors.password && (
								<Tooltip
									placement="right"
									isOpen={true}
									target="Password"
									toggle={toggle}
								>
									{errors.password}
								</Tooltip>
							)}
						</FormGroup>
						<FormGroup>
							<Input
								type="password"
								id="ConfirmPassword"
								className={classText(errors.confirmPassword)}
								defaultValue={personalInformation.confirmPassword}
								onChange={(e) => {
									onPersonalChange(e);
								}}
								placeholder="Confirm Password"
								name="confirmPassword"
							/>
							{errors.confirmPassword && (
								<Tooltip
									placement="right"
									isOpen={true}
									target="ConfirmPassword"
									toggle={toggle}
								>
									{errors.confirmPassword}
								</Tooltip>
							)}
						</FormGroup>
						<Button
							className="btn-main text-white border-0"
							block
							onClick={() => {
								Validate();
							}}
							disabled={isLoading}
						>
							{isLoading ? (
								<FontAwesomeIcon icon={faSpinner} spin />
							) : (
								"Register"
							)}
						</Button>
					</fieldset>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
