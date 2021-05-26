import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider } from "./Auth/Auth";
import PrivateRoute from "./Components/Shared/PrivateRoute";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Dash from "./Pages/Dash";
import ForgotPassword from "./Pages/ForgotPassword";
import Footer from "./Components/Shared/Footer";
import NotFound from "./Pages/NotFound";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import logo from "./logo.svg";
import "./App.css";
import ScrollUp from "./Components/Shared/ScrollUp";

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
							<Route path="/forgot" exact component={ForgotPassword} />
							<Route path="/*" exact component={NotFound} />
							{/* <PrivateRoute exact path="/Dash" component={Dash} />
						// <Route path="/" exact component={Home}></Route>
						<Route path="/about" exact component={About}></Route>
						<Route path="/terms" exact component={Terms}></Route>
						<Route path="/signup" exact component={SignUp}></Route>
						<Route path="/forgot" exact component={ForgotPassword}></Route> */}
						</Switch>
					</div>
					<ScrollUp />
					<Footer />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
