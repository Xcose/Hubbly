function EditPersonalInformationVal(values) {
	let errors = {};
	if (!values.name) {
		errors.name = "Name is required!";
	}
	if (!values.surname) {
		errors.surname = "Surname is required!";
	}
	if (!values.id) {
		errors.id = "ID is required!";
	} else if (
		!/(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/.test(
			values.id
		)
	) {
		errors.id = "ID number is not valid!";
	}
	if (!values.mobile) {
		errors.mobile = "Mobile number is required!";
	} else if (
		!/(^0[87][23467]((\d{7})|( |-)((\d{3}))( |-)(\d{4})|( |-)(\d{7})))/.test(
			values.mobile
		)
	) {
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
	if (!values.street) {
		errors.street = "Street is required!";
	}
	if (!values.suburb) {
		errors.suburb = "Suburb is required!";
	}
	if (!values.town) {
		errors.town = "Town is required!";
	}
	if (!values.postCode) {
		errors.postCode = "Postal Code is required!";
	}

	return errors;
}
export default EditPersonalInformationVal;
