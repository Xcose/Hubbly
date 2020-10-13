function PackageInfoValdation(values) {
	let errors = {};

	if (!values) {
		errors.package = "Select a data package!";
	}

	return errors;
}
export default PackageInfoValdation;
