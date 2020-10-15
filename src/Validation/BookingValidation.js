const BookingValidation = (values) => {
    let errors = {};

	if (!values.eventDate) {
		errors.eventDate = "Event Date is required!";
    }
    if (!values.startTime) {
		errors.startTime = "Start time is required!";
    }
    if (!values.endTime) {
		errors.endTime = "End time is required!";
    }
    if (!values.numberOfHubds) {
		errors.numberOfHubds = "Number of hubs is required!";
    }
    if (!values.flvs) {
		errors.flvs = "Please add Flvours!";
    }
    
    return errors;
}

export default BookingValidation;