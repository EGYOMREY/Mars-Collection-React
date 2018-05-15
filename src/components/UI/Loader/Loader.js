import React from 'react';

import './Loader.css';

const loader = (props) => {

let loaderStyle = null;

const absoluteCSS = {
		position: 'absolute',
		margin: 'auto',
		top: '0',
		left: '0',
		bottom: '0',
		right: '0',
		zIndex: 1,
		color: '#CBCBCB'
	}

const defaultColor = {
	color: '#CBCBCB',
	margin: 'auto',
		zIndex: 1
}

loaderStyle = (props.absolutePosition) ? absoluteCSS : defaultColor;

	return (
	<div className="la-fire la-2x" style={loaderStyle}>
		    <div></div>
		    <div></div>
		    <div></div>
		</div>
	);
}

export default loader