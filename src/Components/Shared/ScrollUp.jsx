import { faHandMiddleFinger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button } from "reactstrap";

const ScrollUp = () => {
	const [isVisible, setIsVisible] = useState(false);

	const changeIsVisible = () => {
		if (window.scrollY >= window.outerHeight) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	window.addEventListener("scroll", changeIsVisible);
	return (
		<Button
			style={{ position: "fixed", bottom: 100, right: 20, zindex: 999999 }}
			className={`rounded-circle scroll-up-btn ${isVisible ? "active" : ""}`}
			onClick={() => {
				window.scroll({ top: 0, behavior: "smooth" });
			}}
		>
			<FontAwesomeIcon icon={faArrowUp} />
		</Button>
	);
};

export default ScrollUp;
