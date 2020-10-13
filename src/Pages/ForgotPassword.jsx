import React, { useState } from "react";
import Navigation from "../Components/Shared/Navigation";
import { FormGroup, Input, Button, Tooltip } from "reactstrap";
import Validation from "../Validation/PasswordReset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import firebaseApp from "../firebase";
import {
	ErrorMessage,
	SuccessMessage,
} from "../Components/Shared/Notifications";
import { Redirect } from "react-router-dom";

function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const classText = (error) => {
		return `rounded-0 input border-top-0 border-left-0 border-right-0 ${
			error ? "is-invalid" : ""
		}`;
	};

	const validate = () => {
		const valErrors = Validation(email);

		if (valErrors === null) {
			onSubmit();
		} else {
			setError(valErrors);
		}
	};

	const onSubmit = async () => {
		try {
			setIsLoading(true);
			await firebaseApp.auth().sendPasswordResetEmail(email);
			const message =
				"Password reset email has been sent. Please check your email!";
			SuccessMessage(message);

			// return <Redirect to="/" />;
		} catch (err) {
			// An error happened.
			ErrorMessage(err.message);
		}
		setIsLoading(false);
	};

	return (
		<div className="h-100">
			<Navigation />
			<div class="row justify-content-center h-100">
				<div className="col-12 col-lg-5">
					<fieldset className="p-5">
						<legend className="h2 text-white text-center font-weight-bold">
							<strong>Password Reset</strong>
						</legend>
						<FormGroup>
							{/* <Label>Please Enter your email address</Label> */}
							<Input
								type="text"
								id="ResetEmail"
								value={email}
								className={classText(error)}
								onChange={(e) => {
									setEmail(e.target.value);
									setError("");
								}}
								placeholder="Email Address"
								name="Email"
							/>
							{error && (
								<Tooltip placement="right" isOpen={true} target="ResetEmail">
									{error}
								</Tooltip>
							)}
						</FormGroup>
						<Button
							block
							className="btn-main border-0"
							disabled={isLoading}
							onClick={() => {
								validate();
							}}
						>
							{isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Reset"}
						</Button>
					</fieldset>
				</div>
			</div>
		</div>
	);
}

export default ForgotPassword;
