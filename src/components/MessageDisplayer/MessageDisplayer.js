import React from "react";
import { Row, Col } from "react-materialize";

import "./MessageDisplayer.css";

import { connect } from 'react-redux';

const messageDisplayer = props => {
	console.log(props);
	let messageFeedback = "Press the Search Button to begin";
	if ( (props.initialSearchBegan && !props.loading && !props.pictureData) || props.requestError ) {
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
		<Row>
			<Col s={12} className="MessageDisplayer">
				<p>{messageFeedback}</p>
			</Col>
		</Row>
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
}



export default connect(mapStateToProps)(messageDisplayer);
