const BookingValidation = (values) => {
	let errors = {};

	if (!values.eventDate) {
		errors.eventDate = "Event Date is required!";
	}
	if (!values.startTime) {
		errors.startTime = "Start time is required!";
	}
	if (!values.address) {
		errors.address = "Address time is required!";
	}
	if (!values.endTime) {
		errors.endTime = "End time is required!";
	}
	if (!values.numberOfHubs) {
		errors.numberOfHubs = "Number of hubs is required!";
	} else if (values.numberOfHubs === 0) {
		errors.numberOfHubs = "Number of hubs cannot be 0!";
	}
	if (!values.flvs) {
		errors.flvs = "Please add Flvours!";
	}

	return errors;
};

export default BookingValidation;
