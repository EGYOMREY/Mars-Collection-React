import React, {Component} from 'react';

import PicturesDisplay from '../../components/PicturesDisplay/PicturesDisplay';
import Menu from '../../components/Menu/Menu';


import './MainContent.css';

class MainContent extends Component {
	render() {
		return (
			<div className="MainContent">
			   <Menu />
			   <PicturesDisplay />
			</div>
		);
	}
}
export default MainContent;
