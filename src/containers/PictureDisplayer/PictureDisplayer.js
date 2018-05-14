import React, { Component }  from 'react';

import Picture from '../../components/Picture/Picture';
import MessageDisplayer from '../../components/MessageDisplayer/MessageDisplayer';
import { Row, Col} from 'react-materialize';

import LikeButton from '../../components/UI/LikeButton/LikeButton';

import Loader from '../../components/UI/Loader/Loader';

import './PictureDisplayer.css';


class PictureDisplayer extends Component {


	render () {
		let photosToDisplay = null;
		if (this.props.photosData) {
			
			const photosArray = this.props.photosData.photos;
			let filteredArray = photosArray.filter( (el, index) => {
		            return index%2 === 1;
		           });			
			photosToDisplay = filteredArray.map( ob => {
				return (
					<div className="PictureCard" key={ob.id}>
						<Picture 
						sourcePicture={ob.img_src}
						pictureWidth={this.props.pictureWidth}
						pictureHeight={this.props.pictureHeight} />
						<LikeButton
						likePicture={this.props.addToFavorites}
						pictureSrc={ob.img_src} />
					</div>
					);
			});
		}

		let displayPicturesComponent = (this.props.isLoading) ? <Loader defaultColor /> 
				: (this.props.photosData) ? <Row>
												<Col s={12} className='PicturesToDisplay'>
													{photosToDisplay}
												</Col>
											</Row>
				: null;

		let messageFeedback = "Press the Search Button to begin";
		if (this.props.requestError || (this.props.initialSearchBegan && !this.props.isLoading && !this.props.photosData) ) {
			messageFeedback = "There was an error trying to fetch the images, please hit the Search button again";
		} else if (this.props.isLoading) {
			messageFeedback = "Loading...";
		} else if (this.props.photosData) {
			messageFeedback = `Showing Pictures from Mars taken on Sol date: ${this.props.solDate}, Earth date: ${this.props.earthDate}`;
		} else if (this.props.photosData && this.props.initialSearchBegan) {
			messageFeedback = "No results, please hit the Search button again";
		}


			return (
				<div className="PictureDisplayer">
					<MessageDisplayer> 
					{messageFeedback}
					</MessageDisplayer>
					{displayPicturesComponent}
				</div>

			);

	}
}


export default PictureDisplayer;