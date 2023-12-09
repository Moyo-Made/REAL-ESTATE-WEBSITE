import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
	return (
		<section className="gs-wrapper">
			<div className="paddings innerWidth gs-container">
				<div className="flexColCenter inner-container">
					<span className="primaryText">Get started with Homyz</span>
					<span className="secondaryText">
						Subscribe and find super attractive price quote. <br />
						Find your residence soon.
					</span>
					<button className="button">
						<a href="mailto:adegbitemoyomade2004@gmail.com">Get Started</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default GetStarted;
