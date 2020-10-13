import React, { useState, useContext } from "react";
import { Button, Tooltip, FormGroup, Input } from "reactstrap";
import Validation from "../../Validation/LoginValidation";
import firebaseApp from "../../firebase";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import Logo from "../../Images/Logo.png";
import { ErrorMessage } from "../Shared/Notifications";

const Login = ({ home }) => {
	// const [redirect, setRedirect] = useState(false);
	const [credentials, setCredentials] = useState({
		username: null,
		password: null,
	});
	const [validationErrors, setValidationErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const classText = (error) => {
		return `rounded-0 border-top-0 border-left-0 border-right-0 ${
			error ? "is-invalid" : ""
		}`;
	};

	const onChange = (e) => {
		let UpdatedCredentials = credentials;
		UpdatedCredentials[e.target.name] = e.target.value;
		setCredentials(UpdatedCredentials);
	};

	const Validate = () => {
		const valErrors = Validation(credentials);

		if (Object.keys(valErrors).length === 0) {
			onSubmit();
		} else {
			setValidationErrors(valErrors);
		}
	};

	const onSubmit = async () => {
		// try to login to firebase
		try {
			setIsLoading(true);
			await firebaseApp
				.auth()
				.signInWithEmailAndPassword(credentials.username, credentials.password);
		} catch (err) {
			const message = err.message.toString();
			ErrorMessage(message);
		}
		setIsLoading(false);
	};

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/Dash" />;
	}

	return (
		<div>
			<FormGroup>
				<Input
					type="text"
					id="LoginUsername"
					className={classText(validationErrors.username)}
					defaultValue={credentials.username}
					onChange={(e) => {
						onChange(e);
					}}
					placeholder="Username"
					name="username"
				/>
				{validationErrors.username && (
					<Tooltip placement="right" isOpen={true} target="LoginUsername">
						{validationErrors.username}
					</Tooltip>
				)}
			</FormGroup>
			<FormGroup>
				<Input
					type="password"
					id="LoginPassword"
					className={classText(validationErrors.password)}
					defaultValue={credentials.password}
					onChange={(e) => {
						onChange(e);
					}}
					placeholder="Password"
					name="password"
				/>
				{validationErrors.password && (
					<Tooltip placement="right" isOpen={true} target="LoginPassword">
						{validationErrors.password}
					</Tooltip>
				)}
			</FormGroup>
			<Button
				className="btn-main border-0"
				block
				onClick={() => {
					Validate();
				}}
				disabled={isLoading}
			>
				{isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Login"}
			</Button>
			<div className="row">
				<Link to="/forgot" className="col-12 col-lg-8">
					<Button color="link" className="text-main" block>
						forgot password
					</Button>
				</Link>
				<Link to="/signup" className="col-12 col-lg-4">
					<Button color="link" className="text-main" block>
						Register
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
