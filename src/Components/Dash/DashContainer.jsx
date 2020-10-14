import React, { useState, useEffect } from "react";
import {
	Nav,
	NavItem,
	NavLink,
	Col,
	TabPane,
	Row,
	TabContent,
} from "reactstrap";
import AccountTab from "./AccountTab";
import BookingTab from "./BookingTab";
import DashNav from "./DashNav";
import HomeTab from "./HomeTab";

const DashContainer = ({ name }) => {
	const [selectedTab, setSelectedTab] = useState("booking");

	const Tabclick = (tab) => {
		if (selectedTab !== tab) setSelectedTab(tab);
	};

	return (
		<div className="h-100 d-flex flex-column">
			<div className="w-100">
				<DashNav />
			</div>
			<div className="row h-100">
				<Col sm="12" lg="2" className="bg-secondary p-lg-5 p-4 text-center">
					<p className="text-white">
						Welcome <b>{name}</b>
					</p>
					<Nav pills className="d-flex justify-content-center">
						<NavItem>
							<NavLink
								href="#"
								className={selectedTab === "home" ? "active" : null}
								onClick={() => Tabclick("home")}
							>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								href="#"
								className={selectedTab === "booking" ? "active" : null}
								onClick={() => Tabclick("booking")}
							>
								Bookings
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								href="#"
								className={selectedTab === "account" ? "active" : null}
								onClick={() => Tabclick("account")}
							>
								Account
							</NavLink>
						</NavItem>
					</Nav>
				</Col>
				<Col sm="12" lg="10">
					<TabContent activeTab={selectedTab} className="h-100">
						<TabPane tabId="home" className="h-100">
							<HomeTab />
						</TabPane>
						<TabPane tabId="booking">
							<BookingTab />
						</TabPane>
						<TabPane tabId="account">
							<AccountTab />
						</TabPane>
					</TabContent>
				</Col>
			</div>
		</div>
	);
};

export default DashContainer;
