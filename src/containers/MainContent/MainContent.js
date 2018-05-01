import React, {Component} from 'react';

import PicturesDisplay from '../../components/PicturesDisplay/PicturesDisplay';
import MenuOptions from '../../components/MenuOptions/MenuOptions';


import './MainContent.css';

class MainContent extends Component {
	render() {
		return (
			<div className="MainContent">
			   <MenuOptions />
			   <PicturesDisplay />
			</div>
		);
	}
}
export default MainContent;
