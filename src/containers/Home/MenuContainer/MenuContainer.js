import React, { Component } from "react";
import { Row, Button, Col, Modal, Collection, CollectionItem } from "react-materialize";

import "./MenuContainer.css";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";

//Redux
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const ROVER_NAMES = ["Curiosity", "Opportunity", "Spirit"];
const PICTURE_SIZES = [300, 400, 500, 600, 800];
const labels = {
	rovers: "Rover",
	widthPic: "Picture Width",
	heightPic: "Picture Height"
};

class MenuOptions extends Component {
	chooseRoverHandler = event => {
		this.props.selectRover(event.target.value);
	};

	chooseWidthHandler = event => {
		this.props.selectPictureWidth(+event.target.value);

	};

	chooseHeightHandler = event => {
		this.props.selectPictureHeight(+event.target.value);

	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="MenuContainer">
				<Row>
					<Col s={12}>
						<Modal
							header="How does this work?"
							trigger={<Button wave="light" className="grey lighten-1">Instructions</Button>}>
							<Collection>
							  <CollectionItem>Select between the 3 rovers (Curiosity, Opportunity and Spirit)
								to display pictures of their missions in Mars</CollectionItem>
							  <CollectionItem>Choose the dimention of the
								pictures before and after the search</CollectionItem>
							  <CollectionItem>Click on the ❤ Button to save a picture to your
								favorites. To see your saved pictures, check out
								the <strong>"My Pictures"</strong> section</CollectionItem>
							  <CollectionItem>Click on a picture to see it full size</CollectionItem>
							   <CollectionItem>It is recommended to use this webapp in desktop to get the best out of the pictures</CollectionItem>
							</Collection>
						</Modal>
					</Col>
				</Row>
				<Row>
					<Col s={12}>
						<Dropdown
							size={12}
							optionsToDisplay={ROVER_NAMES}
							handleSelection={this.chooseRoverHandler}
							selectLabel={labels.rovers}
						/>
					</Col>
				</Row>
				<Row>
					<Col s={12}>
						<Dropdown
							optionsToDisplay={PICTURE_SIZES}
							handleSelection={this.chooseWidthHandler}
							selectLabel={labels.widthPic}
						/>
						<Dropdown
							optionsToDisplay={PICTURE_SIZES}
							handleSelection={this.chooseHeightHandler}
							selectLabel={labels.heightPic}
						/>
					</Col>
				</Row>
				<Row>
					<Button
						onClick={() => this.props.searchForPictures(this.props.rover)}
						wave="light"
						className="deep-orange">
						Search
					</Button>
				</Row>
				<Row>
					<Button
						onClick={() => this.props.searchForPictures(this.props.rover, 'latest')}
						wave="light"
						className="blue darken-2">
						Latest Pictures
					</Button>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		rover: state.menuContainer.chosenRover
	};
};

const mapDispatchToProps = dispatch => {
	return {
		selectRover: rover => dispatch(actions.selectRover(rover)),
		selectPictureWidth: width =>
			dispatch(actions.selectPictureWidth(width)),
		selectPictureHeight: height =>
			dispatch(actions.selectPictureHeight(height)),
		searchForPictures: (rover, typeOfSearch) =>
			dispatch(actions.beginSearch(rover, typeOfSearch))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuOptions);
