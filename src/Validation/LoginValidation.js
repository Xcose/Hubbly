function LoginValdation(values) {
	let errors = {};

	if (!values.username) {
		errors.username = "Email is required!";
	}
	if (!values.password) {
		errors.password = "Password is required!";
	}

	return errors;
}
export default LoginValdation;
