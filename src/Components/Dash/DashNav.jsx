import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Button,
} from "reactstrap";
import firebaseApp from "../../firebase";

const DashNav = ({ name }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const signOut = () => {
		firebaseApp.auth().signOut();
	};

	return (
		<div>
			<Navbar color="dark" light expand="md">
				<NavbarBrand className="text-white" href="/">
					Hubbly
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Button
						color="primary"
						className="ml-auto"
						onClick={() => {
							signOut();
						}}
					>
						Logout
					</Button>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default DashNav;
