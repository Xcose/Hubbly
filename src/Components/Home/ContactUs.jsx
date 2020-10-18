import React, { useState } from "react";
import { FormGroup, Input, Button, Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMobile,
	faEnvelope,
	faSpinner,
} from "@fortawesome/free-solid-svg-icons";
// import { SuccessMessage, ErrorMessage } from "../Shared/Notifications";
// import Validation from "../../Validation/ContactUsValidation";
// import emailjs from "emailjs-com";

function ContactUs() {
	const initialContactData = {
		name: null,
		email: null,
		message: null,
	};

	const [contactData, setContactData] = useState(initialContactData);
	const [validationErrors, setValidationErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	const classText = (error) => {
		return `rounded-0 italic ${error ? "is-invalid" : ""}`;
	};

	const onChange = (e) => {
		let UpdatedContactData = contactData;
		UpdatedContactData[e.target.name] = e.target.value;
		setContactData(UpdatedContactData);
	};

	const clear = () => {
		let UpdatedContactData = contactData;
		UpdatedContactData["name"] = null;
		UpdatedContactData["email"] = null;
		UpdatedContactData["message"] = null;
		setContactData(UpdatedContactData);
	};

	// const Validate = () => {
	// 	const valErrors = Validation(contactData);

	// 	if (Object.keys(valErrors).length === 0) {
	// 		onSubmit();
	// 	} else {
	// 		setValidationErrors(valErrors);
	// 	}
	// };

	const onSubmit = async () => {
		// setIsLoading(true);
		// try {
		// 	await emailjs.sendForm(
		// 		"smtp_server",
		// 		"template_DwxJnuMN",
		// 		"#contact_form",
		// 		"user_2NUlgzcOgBlL7JKjxQraj"
		// 	);
		// 	const message = "Message has been sent!";
		// 	SuccessMessage(message);
		// 	clear();
		// } catch (err) {
		// 	ErrorMessage(err.message);
		// }
		// setIsLoading(false);
	};

	return (
		<div
			className="pt-5 text-center"
			id="contactUs"
			style={{ height: "100vh" }}
		>
			<p className="display-4 my-5 font-weight-bold">GET IN TOUCH</p>
			<div className="row justify-content-around">
				<div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
					<div className="text-left">
						<p className="font-italic my-5">
							<FontAwesomeIcon icon={faMobile} /> 076 661 3279
						</p>
						<p className="font-italic my-5">
							<FontAwesomeIcon icon={faEnvelope} /> email@domain.co.za
						</p>
					</div>
				</div>
				<div className="col-12 col-lg-5 p-5">
					<fieldset className="p-3">
						{/* <legend className="h3 mb-5">Talk to Us</legend> */}
						<form id="contact_form">
							<FormGroup>
								<Input
									type="text"
									id="ContactName"
									className={classText(validationErrors.name)}
									value={contactData.name}
									onChange={(e) => {
										onChange(e);
									}}
									placeholder="Name"
									name="name"
								/>
								{validationErrors.name && (
									<Tooltip
										placement="right"
										isOpen={true}
										toggle={toggle}
										target="ContactName"
									>
										{validationErrors.name}
									</Tooltip>
								)}
							</FormGroup>
							<FormGroup>
								<Input
									type="email"
									id="ContactEmail"
									className={classText(validationErrors.email)}
									value={contactData.email}
									onChange={(e) => {
										onChange(e);
									}}
									placeholder="Email"
									name="email"
								/>
								{validationErrors.email && (
									<Tooltip
										placement="right"
										isOpen={true}
										toggle={toggle}
										target="ContactEmail"
									>
										{validationErrors.email}
									</Tooltip>
								)}
							</FormGroup>
							<FormGroup>
								<Input
									type="textarea"
									id="ContactMessage"
									className={classText(validationErrors.message)}
									value={contactData.message}
									onChange={(e) => {
										onChange(e);
									}}
									placeholder="Message"
									rows="3"
									name="message"
								/>
								{validationErrors.message && (
									<Tooltip
										placement="right"
										isOpen={true}
										target="ContactMessage"
									>
										{validationErrors.message}
									</Tooltip>
								)}
							</FormGroup>
						</form>
						<Button
							onClick={() => {
								// Validate();
							}}
							className="btn-pebble text-main"
							disabled={isLoading}
							color="dark"
							block
						>
							{isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Send"}
						</Button>
					</fieldset>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
