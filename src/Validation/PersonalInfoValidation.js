function PersonalInfoValdation(values) {
	let errors = {};

	if (!values.name) {
		errors.name = "Name is required!";
	}
	if (!values.surname) {
		errors.surname = "Surname is required!";
	}
	if (!values.mobile) {
		errors.mobile = "Mobile number is required!";
	} else if (!/(^(\+27|0)[6-8][0-9]{8}$)/.test(values.mobile)) {
		errors.mobile = "Mobile number is not valid!";
	}
	if (!values.email) {
		errors.email = "Email is required!";
	} else if (
		!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
			values.email
		)
	) {
		errors.email = "Email is invalid!";
	}
	if (!values.password) {
		errors.password = "Password is required!";
	} else if (!/^([a-zA-Z0-9@*#]{8,15})$/.test(values.password)) {
		errors.password =
			"Password must be between 8 and 15 characters. Match all alphanumeric character and predefined wild characters!";
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = "Confirm Password is required!";
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = "Password does not match!";
	}

	return errors;
}
export default PersonalInfoValdation;
