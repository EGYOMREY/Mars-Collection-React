import React from 'react';

import MenuOptions from '../MenuOptions/MenuOptions';
import PicturesContainer from '../PicturesContainer/PicturesContainer';

//import axios from 'axios';

import './Home.css';

const home = () => (
			<div className="Home">
				<MenuOptions />
				<PicturesContainer />
			</div>

			);

export default home;
