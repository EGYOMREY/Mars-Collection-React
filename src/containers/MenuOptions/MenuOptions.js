import React, {Component} from 'react';
import { Row, Button, Col } from 'react-materialize';

import './MenuOptions.css';
import Dropdown from '../../components/Dropdown/Dropdown';

//Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const ROVER_NAMES = ['Curiosity', 'Opportunity', 'Spirit'];
const PICTURE_SIZES = [300,400,500,600, 800];
const labels = {
			rovers: 'Rover',
			widthPic: 'Picture Width',
			heightPic: 'Picture Height'
		}


class MenuOptions extends Component {

	chooseRoverHandler = (event) => {
		this.props.selectRover(event.target.value);
	}

	chooseWidthHandler = (event) => {
		this.props.selectPictureWidth(event.target.value);
	}

	chooseHeightHandler = (event) => {
		this.props.selectPictureHeight(event.target.value);
	}


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
		            handleSelection={this.chooseRoverHandler}
		            selectLabel={labels.rovers}/>
		        </Col>
		    </Row>
		    <Row>
		        <Col s={12}>
		        <Dropdown 
		            optionsToDisplay={PICTURE_SIZES} 
		            handleSelection={this.chooseWidthHandler}
		            selectLabel={labels.widthPic}/>
		        <Dropdown 
		            optionsToDisplay={PICTURE_SIZES} 
		            handleSelection={this.chooseHeightHandler}
		            selectLabel={labels.heightPic}/>
		        </Col>
		    </Row>
		    <Row>
		        <Button onClick={() => this.props.searchForPictures(this.props.rover, this.props.solDate)} wave="light" className="deep-orange">Search</Button>
		    </Row>
		</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    rover: state.chosenRover,
    solDate: state.solDate,
  };
}

const mapDispatchToProps = dispatch => {
    return {
        selectRover: (rover) => dispatch(actions.selectRover(rover)),
        selectPictureWidth: (width) => dispatch(actions.selectPictureWidth(width)),
        selectPictureHeight: (height) => dispatch(actions.selectPictureHeight(height)),
        searchForPictures: (rover,solDate) => dispatch(actions.beginSearch(rover, solDate))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuOptions);
