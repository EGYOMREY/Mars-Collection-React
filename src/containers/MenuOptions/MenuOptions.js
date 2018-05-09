import React, {Component} from 'react';
import { Row, Button, Col } from 'react-materialize';

import './MenuOptions.css';
import Dropdown from '../../components/Dropdown/Dropdown';

// Static content
const ROVER_NAMES = ['Curiosity', 'Opportunity', 'Spirit'];
const PICTURES_TO_DISPLAY = [6,7,8,9,10,11,12];
const PICTURE_SIZES = [300,400,500,600, 800];
const labels = {
			rovers: 'Rover',
			picsToDisplay: 'No. of Pictures',
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
		        <p>Welcome to the Mars Collection, where you can see pictures of the Red Planet. Select between the 3 rovers to display pictures of their missions in Mars, how many pictures to display and their dimentions. </p>
		        </Col>
		    </Row>
		    <Row>
		        <Col s={12}>
		        <Dropdown 
		            optionsToDisplay={ROVER_NAMES} 
		            handleSelection={this.props.chooseRover}
		            selectLabel={labels.rovers}/>
		        <Dropdown 
		            optionsToDisplay={PICTURES_TO_DISPLAY} 
		            handleSelection={this.props.choosePicsToDisplay}
		            selectLabel={labels.picsToDisplay}/>
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