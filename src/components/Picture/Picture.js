import React, { Fragment } from 'react';

import './Picture.css';

import Loader from '../UI/Loader/Loader';

const picture = (props) => (
	<Fragment>
		<Loader absolutePosition />
		<img  src={props.sourcePicture} className="Picture" alt="curiosity" />
	</Fragment>
);


export default picture;