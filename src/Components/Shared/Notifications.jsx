import { store } from "react-notifications-component";

export const SuccessMessage = (message) => {
	store.addNotification({
		title: "Wonderful!",
		message: message,
		type: "success",
		insert: "top",
		container: "top-right",
		animationIn: ["animate__animated", "animate__fadeIn"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
			duration: 5000,
			onScreen: true,
		},
	});
};

export const ErrorMessage = (message) => {
	store.addNotification({
		title: "Error!",
		message: message,
		type: "danger",
		insert: "top",
		container: "top-right",
		animationIn: ["animate__animated", "animate__fadeIn"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
			duration: 5000,
			onScreen: true,
		},
	});
};
