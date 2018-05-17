import React, { Fragment } from "react";
import PropTypes from 'prop-types'

import "./Picture.css";
import Loader from "../UI/Loader/Loader";

const Picture = ({pictureWidth, pictureHeight, sourcePicture}) => {
	const pictureStyling = {
		width: `${pictureWidth}px`,
		height: `${pictureHeight}px`,
		maxWidth: "inherit",
		backgroundImage: `url(${sourcePicture})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		zIndex: 10,
		position: "relative",
		boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
		marginBottom: "1em"
	};

	return (
		<Fragment>
			<Loader centered />
			<div style={pictureStyling} />
		</Fragment>
	);
};

Picture.propTypes = {
  pictureWidth: PropTypes.number.isRequired,
  pictureHeight: PropTypes.number.isRequired,
  sourcePicture: PropTypes.string.isRequired
};


export default Picture;
