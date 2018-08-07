import React, { Component} from "react";

import MessageDisplayer from "../../../components/MessageDisplayer/MessageDisplayer";
import Pictures from "./Pictures/Pictures";
import { connect } from "react-redux";
import "./PicturesContainer.css";

export class PicturesContainer extends Component {
	render() {
		let messageFeedback = "Press the Search Button to begin";
		if (
			(this.props.initialSearchBegan && !this.props.loading && !this.props.pictureData) ||
			this.props.requestError
		) {
			messageFeedback =
				"There was an error trying to fetch the images, please hit the Search button again";
		} else if (this.props.loading) {
			messageFeedback = "Loading...";
		} else if (this.props.pictureData) {
			messageFeedback = `Showing Pictures from Mars taken on Earth date: ${this.props.earthDate}`;
		}

		return (
			<div className="PicturesContainer">
				<MessageDisplayer>{messageFeedback}</MessageDisplayer>
				<Pictures />
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		requestError: state.menuContainer.requestError,
		initialSearchBegan: state.menuContainer.initialSearchBegan,
		loading: state.menuContainer.loading,
		pictureData: state.menuContainer.pictureData,
		earthDate: state.menuContainer.earthDate
	};
};

export default connect(mapStateToProps)(PicturesContainer);
