import React, { Component } from 'react';
import {Button} from 'react-materialize';


class LikeButton extends Component {

	state = {
		disableButton: false
	}

	toggleLikeButtonHandler = () => {
		this.setState({disableButton: true});
	}

	shouldComponentUpdate(nextState, nextProps) {
		if (this.state.disableButton !== nextProps.disableButton){
			return true;
		}
			return false;
	}

render() {



	return (

		<div style={{position: 'absolute', width: '100%', bottom: '10%', display: 'flex', justifyContent: 'space-around', zIndex: 11}}>
			<Button 
			onClick={() => {this.props.likePicture(this.props.pictureSrc); this.toggleLikeButtonHandler()}}
			disabled={this.state.disableButton}
			floating 
			large 
			className='pink' 
			waves='light' 
			icon='favorite' />
		</div>


		);

}

}


export default LikeButton;