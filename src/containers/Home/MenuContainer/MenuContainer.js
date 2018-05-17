import React, { Component } from "react";
import { Row, Button, Col, Modal } from "react-materialize";

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
		this.props.selectPictureWidth(event.target.value);
	};

	chooseHeightHandler = event => {
		this.props.selectPictureHeight(event.target.value);
	};

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<div className="MenuContainer">
				<Row>
					<Col s={12}>
						<Modal
							header="Enjoy pictures from Mars"
							trigger={<Button wave="light" className="grey lighten-1">Instructions</Button>}>
							<p>
								Welcome to the Mars Collection, where you can
								see pictures of the Red Planet!. Select between
								the 3 rovers (Curiosity, Opportunity and Spirit)
								to display pictures of their missions in Mars,
								you can also choose the dimention of the
								pictures before and after the search. Click on
								the ❤ Button to save a picture to your
								favorites. To see your saved pictures, check out
								the <strong>"My Pictures"</strong> section
							</p>
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
						onClick={() => this.props.searchForPictures(this.props.rover,this.props.solDate)}
						wave="light"
						className="deep-orange">
						Search
					</Button>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		rover: state.menuContainer.chosenRover,
		solDate: state.menuContainer.solDate
	};
};

const mapDispatchToProps = dispatch => {
	return {
		selectRover: rover => dispatch(actions.selectRover(rover)),
		selectPictureWidth: width =>
			dispatch(actions.selectPictureWidth(width)),
		selectPictureHeight: height =>
			dispatch(actions.selectPictureHeight(height)),
		searchForPictures: (rover, solDate) =>
			dispatch(actions.beginSearch(rover, solDate))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuOptions);
