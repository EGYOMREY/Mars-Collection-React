import React, { Component } from 'react';

import Loader from '../../components/UI/Loader/Loader';
import Picture from '../../components/Picture/Picture';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

import './MyPictures.css';

class MyPictures extends Component {

	componentWillMount () {
		// Bring the pictures which are in the LocalStorage and put them in the state.
		this.props.showLikedPictures();
	}

	render () {
		let photosToDisplay = null;
		if (this.props.likedPictures) {
			const pictures = this.props.likedPictures;
			photosToDisplay = pictures.map( (ob, index) => {
				return (
					<div className="PictureCard" key={index}>
						<Picture
							sourcePicture={ob}
							pictureWidth="500"
							pictureHeight="500"
						/>
					</div>
				);
			});
		}

		return (
			<div className="MyPictures">
				<p>{this.props.likedPictures.length === 0 ? "You haven't liked any picture yet!" : "Number of pictures liked so far: "+this.props.likedPictures.length}</p>
				<p></p>
				<div className="PicturesDisplayed">
					{!photosToDisplay ? <Loader defaultColor /> : photosToDisplay}
				</div>
			</div>
			);
	}
}


const mapStateToProps = state => {
  return {
    likedPictures: state.pictures.likedPictures
  };
}

const mapDispatchToProps = dispatch => {
    return {
        showLikedPictures: (pictureSource) => dispatch(actions.addPictureToFavorites())
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(MyPictures);