import React from "react";

import Curiosity from "../../../assets/rover_curiosity.jpg";
import Opportunity from "../../../assets/rover_opportunity.jpg";
import Spirit from "../../../assets/rover_spirit.jpg";

import Loader from '../Loader/Loader';

const figureObject = props => {
	let roverPicture = null;
	switch (props.pictureAlt) {
		case "Curiosity":
			roverPicture = Curiosity;
			break;
		case "Opportunity":
			roverPicture = Opportunity;
			break;
		case "Spirit":
			roverPicture = Spirit;
			break;
		default: roverPicture = Curiosity;
	}

	return (
		<figure>
			<img src={roverPicture} alt={props.pictureSource} />
			<figcaption>{props.pictureSource}</figcaption>
		</figure>
	);
};
export default figureObject;
