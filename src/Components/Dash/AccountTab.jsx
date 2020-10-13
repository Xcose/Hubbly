import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const AccountTab = () => {
	return (
		<div className="row h-100 justify-content-center p-5">
			<div className="col-12 col-lg-8 text-center">
				<Card body>
					<CardTitle>Special Title Treatment</CardTitle>
					<CardText>
						With supporting text below as a natural lead-in to additional
						content.
					</CardText>
					<Button>Go somewhere</Button>
				</Card>
			</div>
		</div>
	);
};

export default AccountTab;
