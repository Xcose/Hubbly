import React, { useState, useContext, useEffect } from "react";
import firebaseApp from "../firebase";
import { AuthContext } from "../Auth/Auth";
import {
	SuccessMessage,
	ErrorMessage,
} from "../Components/Shared/Notifications";
import { FormGroup, Input, Button, Tooltip } from "reactstrap";
import DashNav from "../Components/Dash/DashNav";
import DashContainer from "../Components/Dash/DashContainer";

function Dash() {
	const [personalInformation, setPersonalInformation] = useState({});
	const { currentUser } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchData();
	}, [currentUser]);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			await firebaseApp
				.firestore()
				.collection("people")
				.doc(currentUser.uid)
				.onSnapshot((doc) => {
					const data = doc.data();
					setPersonalInformation(data);
				});
		} catch (err) {
			const message = err.message.toString();
			ErrorMessage(message);
		}
		setIsLoading(false);
	};

	return (
		<div className="h-100">
			<DashContainer name={personalInformation.name} />
		</div>
	);
}

export default Dash;
