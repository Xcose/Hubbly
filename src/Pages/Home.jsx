import React from "react";
import About from "../Components/Home/About";
import ContactUs from "../Components/Home/ContactUs";
import Hero from "../Components/Home/Hero";
import Testimonials from "../Components/Home/Testimonials";

function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Testimonials />
			<ContactUs />
		</div>
	);
}

export default Home;
