function PasswordReset(value) {
	let error = null;
	if (!value) {
		error = "Please enter your email address";
	} else if (
		!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
			value
		)
	) {
		error = "Email is invalid!";
	}
	return error;
}
export default PasswordReset;
