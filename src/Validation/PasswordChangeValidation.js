function PassworedChangeValidation(values) {
	let errors = {};

	if (!values.oldPassword) {
		errors.oldPassword = "Password is required!";
	}
	if (!values.newPassword) {
		errors.newPassword = "Password is required!";
	} else if (!/^([a-zA-Z0-9@*#]{8,15})$/.test(values.password)) {
		errors.newPassword =
			"Password must be between 8 and 15 characters. Match all alphanumeric character and predefined wild characters!";
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = "Confirm Password is required!";
	} else if (values.confirmPassword !== values.newPassword) {
		errors.confirmPassword = "Password does not match!";
	}

	return errors;
}
export default PassworedChangeValidation;
