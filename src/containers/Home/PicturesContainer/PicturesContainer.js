import React from "react";

import MessageDisplayer from "../../../components/MessageDisplayer/MessageDisplayer";
import Pictures from "./Pictures/Pictures";
import { connect } from "react-redux";
import "./PicturesContainer.css";

const picturesContainer = props => {
	let messageFeedback = "Press the Search Button to begin";
	if (
		(props.initialSearchBegan && !props.loading && !props.pictureData) ||
		props.requestError
	) {
		messageFeedback =
			"There was an error trying to fetch the images, please hit the Search button again";
	} else if (props.loading) {
		messageFeedback = "Loading...";
	} else if (props.pictureData) {
		messageFeedback = `Showing Pictures from Mars taken on Sol date: ${
			props.solDate
		}, Earth date: ${props.earthDate}`;
	}

	return (
		<div className="PicturesContainer">
			<MessageDisplayer>{messageFeedback}</MessageDisplayer>
			<Pictures />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		requestError: state.requestError,
		initialSearchBegan: state.initialSearchBegan,
		loading: state.loading,
		pictureData: state.pictureData,
		solDate: state.solDate,
		earthDate: state.earthDate
	};
};

export default connect(mapStateToProps)(picturesContainer);
