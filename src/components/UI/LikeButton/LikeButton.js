import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-materialize";
import './LikeButton.css';

class LikeButton extends Component {
	state = {
		disableButton: false
	};

	toggleLikeButtonHandler = () => {
		this.setState({ disableButton: true });
	};

	shouldComponentUpdate(nextState, nextProps) {
		if (this.state.disableButton !== nextProps.disableButton) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className="LikeButton">
				<Button
					onClick={() => {
						this.props.likePicture(this.props.pictureSrc);
						this.toggleLikeButtonHandler();
					}}
					disabled={this.state.disableButton}
					floating
					large
					className="pink"
					waves="light"
					icon="favorite"
				/>
			</div>
		);
	}
}

LikeButton.propTypes = {
	likePicture: PropTypes.func.isRequired,
	pictureSrc: PropTypes.string.isRequired
};

export default LikeButton;
