import React, {Fragment, Component} from 'react';


import PicturesDisplay from '../../components/PicturesDisplay/PicturesDisplay';
import Menu from '../../components/Menu/Menu';

import {Col} from 'react-materialize'


class Main extends Component {
	render() {
		return (
			<Fragment>
			 <Col s={12} m={3} className='grid-example'><Menu /></Col>
			 <Col s={12} m={9} className='grid-example' style={{display: "flex", flexWrap: "wrap", justifyContent: 'space-around'}}><PicturesDisplay /><PicturesDisplay /><PicturesDisplay /><PicturesDisplay /></Col>

			</Fragment>
			);
	}
}


export default Main;