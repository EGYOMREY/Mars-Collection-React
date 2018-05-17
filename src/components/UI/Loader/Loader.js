import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({centered}) => {
	let loaderStyle = null;

	const centeredPosition = {
		position: "absolute",
		margin: "auto",
		top: "0",
		left: "0",
		bottom: "0",
		right: "0",
		zIndex: 1,
		color: "#CBCBCB"
	};

	const defaultPosition = {
		color: "#CBCBCB",
		margin: "auto",
		zIndex: 1
	};

	loaderStyle = centered ? centeredPosition : defaultPosition;

	return (
		<div className="la-fire la-2x" style={loaderStyle}>
			<div />
			<div />
			<div />
		</div>
	);
};

Loader.propTypes = {
	centered: PropTypes.bool
};

export default Loader;
