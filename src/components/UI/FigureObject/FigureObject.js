import React from "react";
import PropTypes from "prop-types";

import Curiosity from "../../../assets/rover_curiosity.jpg";
import Opportunity from "../../../assets/rover_opportunity.jpg";
import Spirit from "../../../assets/rover_spirit.jpg";

const FigureObject = ({pictureName}) => {
	let roverPicture = null;
	switch (pictureName) {
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
			<img src={roverPicture} alt={pictureName} />
			<figcaption>{pictureName}</figcaption>
		</figure>
	);
};

FigureObject.propTypes = {
	pictureName: PropTypes.string.isRequired
};

export default FigureObject;
