import React from 'react';

import Picture from '../../components/Picture/Picture';
import { Row, Col} from 'react-materialize';
import {Button} from 'react-materialize';

import Loader from '../../components/UI/Loader/Loader';

import './PictureDisplayer.css';


const pictureDisplayer = (props) => {

	
let photosArray = null, photosToDisplay = null;
if (props.photosData) {
	photosArray = props.photosData.photos;
	//The array is filtered because it contains duplicates
	let filteredArray = photosArray.filter( (el, index) => {
            return index%2 === 1;
           });
	photosToDisplay = filteredArray.map( ob => {
		return (
			<div style={{position: 'relative'}} key={ob.id}>
				<Picture 
				sourcePicture={ob.img_src}
				key={ob.id} />
				<div style={{position: 'absolute', width: '100%', bottom: '10%', display: 'flex', justifyContent: 'space-around', zIndex: 11}}>
					<Button 
					onClick={() => props.addToFavorites(ob.img_src)}   
					floating 
					large 
					className='pink' 
					waves='light' 
					icon='favorite' />
				</div>
			</div>
			);
	});
} else {
	photosToDisplay =  <Loader />
	console.log("Err");
}

	return (
		<div className="PictureDisplayer">
			<Row>
				<Col s={12} className='PictureDates'>
					<p>Sol date: 1820</p>
					<p>Earth date: 2018-04-10</p>
				</Col>
			</Row>
			<Row>
				<Col s={12} className='PicturesToDisplay'>
					{photosToDisplay}
				</Col>
			</Row>
		</div>

	);

}


export default pictureDisplayer;