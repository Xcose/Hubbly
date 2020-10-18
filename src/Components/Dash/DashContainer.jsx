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
import MapComponent from "./MapComponent";

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
			<div className="row h-100 px-5">
				<Col sm="12" lg="6" className="bg-light">
					<p className="pt-lg-5 pt-2 pb-5">
						Welcome <b>{name}</b>
					</p>
					<MapComponent />
				</Col>
				<Col sm="12" lg="6" className="px-5">
					<Nav pills className="pb-5 pt-lg-5 pt-5">
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
					<Row>
						<Col sm="12">
							<TabContent activeTab={selectedTab} className="h-100">
								<TabPane tabId="booking">
									<BookingTab />
								</TabPane>
								<TabPane tabId="account">
									<AccountTab />
								</TabPane>
							</TabContent>
						</Col>
					</Row>
				</Col>
			</div>
		</div>
	);
};

export default DashContainer;
