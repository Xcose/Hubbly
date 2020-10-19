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
} from "reactstrap";
import Login from "../Home/Login";
import { Link } from "react-router-dom";
// import Logo from "../../Images/Logo.png";
import { HashLink } from "react-router-hash-link";

const Navigation = ({ home }) => {
	const [isOpen, setIsOpen] = useState(false);
	const classText = `font-weight-bold ${home ? "text-white" : ""}`;
	const [isDark, setIsDark] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const changeNavbarBackground = () => {
		console.log(window.outerHeight);
		if (window.scrollY >= window.outerHeight - 200) {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	};

	window.addEventListener("scroll", changeNavbarBackground);

	return (
		<div>
			<Navbar
				color={isDark ? "dark" : "transparent"}
				light
				expand="md"
				fixed="top"
			>
				<Link to="/">
					<NavbarBrand
						className={`font-weight-bold d-flex align-items-center d-none d-lg-flex ${
							home ? "text-white" : "text-main"
						}`}
					>
						{/* <img
							src={Logo}
							alt="SBWL Data Deals"
							style={{ width: "8%" }}
							className="m-0"
						/> */}
						<b>Hubbly</b>
					</NavbarBrand>
				</Link>
				<NavbarToggler className="text-white" onClick={toggle} color="light" />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<HashLink to="/#about">
							<NavItem>
								<NavLink className={classText}>About</NavLink>
							</NavItem>
						</HashLink>
						<HashLink to="/#contactUs">
							<NavItem>
								<NavLink className={classText}>Contact Us</NavLink>
							</NavItem>
						</HashLink>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className={classText}>
								Login
							</DropdownToggle>
							<DropdownMenu right className="p-lg-5 p-3 rounded-0">
								<Login home={home} />
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
