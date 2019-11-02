import React, { Component } from 'react';

import { Row, Col } from "react-materialize";
import Picture from '../../../../components/Picture/Picture';
import LikeButton from '../../../../components/UI/LikeButton/LikeButton';
import Loader from '../../../../components/UI/Loader/Loader';

import './Pictures.css';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';

export class Pictures extends Component {

	render() {
		let photosToDisplay = null;
		if (this.props.pictureData) {
			const photosArray = this.props.pictureData.photos;

			photosToDisplay = photosArray.map(ob => {
				let httpsSrc = ob.img_src.replace("http", "https");
				return (
					<div className="PictureCard" key={ob.id}>
						<Picture
							sourcePicture={httpsSrc}
							pictureWidth={this.props.pictureWidth}
							pictureHeight={this.props.pictureHeight}
						/>
						<LikeButton
							likePicture={this.props.addToFavoritesHandler}
							pictureSrc={ob.img_src}
						/>
					</div>
				);
			});
		}
		let displayPicturesComponent = null;
		displayPicturesComponent = this.props.loading ? (
			<Loader />
		) : this.props.pictureData ? (
			<Row>
				<Col s={12} className="Pictures">
					{photosToDisplay}
				</Col>
			</Row>
		) : null;
		return displayPicturesComponent;
	}

}

const mapStateToProps = state => {
  return {
    loading: state.menuContainer.loading,
    pictureData: state.menuContainer.pictureData,
    pictureWidth: state.menuContainer.widthPic,
    pictureHeight: state.menuContainer.heightPic
  };
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavoritesHandler: (pictureSource) => dispatch(actions.addPictureToFavorites(pictureSource))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Pictures);