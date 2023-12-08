import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";

const Residencies = () => {
	return (
		<section className="r-wrapper">
			<div className="paddings innerWidth r-container">
				<div className="r-head flexColStart">
					<span className="orangeText">Best Choices</span>
					<span className="primaryText">Popular Residencies</span>
				</div>
			</div>
		</section>
	);
};

export default Residencies;
