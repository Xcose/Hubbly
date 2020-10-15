import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Components/Shared/PrivateRoute";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Dash from "./Pages/Dash";
import ForgotPassword from "./Pages/ForgotPassword";
import Footer from "./Components/Shared/Footer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="app h-100">
					<Helmet>
						<meta charSet="utf-8" />
						<title>Hubbly</title>
						<link rel="icon" href={logo} />
						<link rel="canonical" href="http://mysite.com/example" />
					</Helmet>
					<ReactNotification />
					<div className="container-fluid p-0">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/signup" exact component={SignUp} />
							<PrivateRoute exact path="/Dash" component={Dash} />
							<Route path="/forgot" exact component={ForgotPassword}></Route>
							{/* <PrivateRoute exact path="/Dash" component={Dash} />
						// <Route path="/" exact component={Home}></Route>
						<Route path="/about" exact component={About}></Route>
						<Route path="/terms" exact component={Terms}></Route>
						<Route path="/signup" exact component={SignUp}></Route>
						<Route path="/forgot" exact component={ForgotPassword}></Route> */}
						</Switch>
						<Button
							style={{
								position: "fixed",
								bottom: 20,
								right: 20,
								zIndex: 999999,
							}}
							className="rounded-circle"
							onClick={() => {
								window.scroll({ top: 0, behavior: "smooth" });
							}}
						>
							^
						</Button>
					</div>

					<Footer />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
