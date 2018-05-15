import React from 'react';

import { Row, Col } from "react-materialize";
import Picture from './Picture/Picture';
import LikeButton from './LikeButton/LikeButton';
import Loader from '../UI/Loader/Loader';

import './Pictures.css';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const pictures = (props) => {

	let photosToDisplay = null;
		if (props.pictureData) {
			const photosArray = props.pictureData.photos;
			let filteredArray = photosArray.filter((el, index) => {
				return index % 2 === 1;
			});
			photosToDisplay = filteredArray.map(ob => {
				return (
					<div className="PictureCard" key={ob.id}>
						<Picture
							sourcePicture={ob.img_src}
							pictureWidth={props.pictureWidth}
							pictureHeight={props.pictureHeight}
						/>
						<LikeButton
							likePicture={props.addToFavoritesHandler}
							pictureSrc={ob.img_src}
						/>
					</div>
				);
			});
		}

		let displayPicturesComponent = props.loading ? (
			<Loader defaultColor />
		) : props.pictureData ? (
			<Row>
				<Col s={12} className="Pictures">
					{photosToDisplay}
				</Col>
			</Row>
		) : null;

	return displayPicturesComponent;
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    pictureData: state.pictureData,
    pictureWidth: state.widthPic,
    pictureHeight: state.heightPic
  };
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavoritesHandler: (pictureSource) => dispatch(actions.addPictureToFavorites(pictureSource))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(pictures);