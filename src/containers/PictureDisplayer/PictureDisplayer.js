import React, { Component }  from 'react';

import Picture from '../../components/Picture/Picture';
import MessageDisplayer from '../../components/MessageDisplayer/MessageDisplayer';
import { Row, Col} from 'react-materialize';
import {Button} from 'react-materialize';

import Loader from '../../components/UI/Loader/Loader';

import './PictureDisplayer.css';


class PictureDisplayer extends Component {
/*
	shouldComponentUpdate(nextProps, nextState){
					console.log(nextProps);
		if (nextProps.initialSearchBegan || this.props.pictureWidth !== nextProps.pictureWidth || this.props.pictureHeight !== nextProps.pictureHeight){
			return true;
		}
			return false;
	}*/

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
						<div style={{position: 'absolute', width: '100%', bottom: '10%', display: 'flex', justifyContent: 'space-around', zIndex: 11}}>
							<Button 
							onClick={() => this.props.addToFavorites(ob.img_src)}   
							floating 
							large 
							className='pink' 
							waves='light' 
							icon='favorite' />
						</div>
					</div>
					);
			});
		}

		let displayPicturesComponent = (this.props.isLoading) ? <Loader absolutePosition /> 
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
			messageFeedback = `Showing Pictures from Mars taken on Sol date: 1820, Earth date: ${this.props.earthDate}`;
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