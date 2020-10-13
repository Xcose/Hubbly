function ContactUsValidation(values) {
	let errors = {};

	if (!values.name) {
		errors.name = "Name is required!";
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
	if (!values.message) {
		errors.message = "Message is required!";
	}

	return errors;
}
export default ContactUsValidation;
