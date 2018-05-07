import React, { Component } from 'react';

import MenuOptions from '../MenuOptions/MenuOptions';
import PictureDisplayer from '../PictureDisplayer/PictureDisplayer';

import './Home.css';

class Home extends Component {




	render() {
		return (
			<div className="Home">
				<MenuOptions />
				<PictureDisplayer/>
			</div>

			);
	}
}

export default Home;