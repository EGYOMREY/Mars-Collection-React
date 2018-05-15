import React, { Fragment } from "react";

import "./Picture.css";
import Loader from "../../UI/Loader/Loader";

const picture = props => {
	const pictureStyling = {
		width: `${props.pictureWidth}px`,
		height: `${props.pictureHeight}px`,
		maxWidth: "inherit",
		backgroundImage: `url(${props.sourcePicture})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		zIndex: 10,
		position: "relative",
		boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
		marginBottom: "1em"
	};

	return (
		<Fragment>
			<Loader absolutePosition />
			<div style={pictureStyling} />
		</Fragment>
	);
};

export default picture;
