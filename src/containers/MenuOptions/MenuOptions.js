import React, {Component} from 'react';
import { Row, Button, Col } from 'react-materialize';

import './MenuOptions.css';
import Dropdown from '../../components/Dropdown/Dropdown';

// Static content
const ROVER_NAMES = ['Curiosity', 'Opportunity', 'Spirit'];
const PICTURE_SIZES = [300,400,500,600, 800];
const labels = {
			rovers: 'Rover',
			widthPic: 'Picture Width',
			heightPic: 'Picture Height'
		}


class MenuOptions extends Component {

shouldComponentUpdate (nextProps, nextState){
		return false;
	}

	render () {
		return (
		<div className="Menu">
		    <Row>
		        <Col s={12}>
		        <p>Welcome to the Mars Collection, where you can see pictures of the Red Planet. Select between the 3 rovers to display pictures of their missions in Mars, and choose their dimentions. Click on the ❤ to save a picture to your favorites. Check them in the "My Pictures" section</p>
		        </Col>
		    </Row>
		    <Row>
		        <Col s={12}>
		        <Dropdown size={12}
		            optionsToDisplay={ROVER_NAMES} 
		            handleSelection={this.props.chooseRover}
		            selectLabel={labels.rovers}/>
		        </Col>
		    </Row>
		    <Row>
		        <Col s={12}>
		        <Dropdown 
		            optionsToDisplay={PICTURE_SIZES} 
		            handleSelection={this.props.chooseWidth}
		            selectLabel={labels.widthPic}/>
		        <Dropdown 
		            optionsToDisplay={PICTURE_SIZES} 
		            handleSelection={this.props.chooseHeight}
		            selectLabel={labels.heightPic}/>
		        </Col>
		    </Row>
		    <Row>
		        <Button onClick={this.props.searchHandler} wave="light" className="deep-orange">Search</Button>
		    </Row>
		</div>
		);
	}
}
export default MenuOptions;