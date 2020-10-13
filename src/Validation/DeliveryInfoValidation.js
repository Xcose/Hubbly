function DeliveryInfoValdation(values) {
	let errors = {};

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
export default DeliveryInfoValdation;
