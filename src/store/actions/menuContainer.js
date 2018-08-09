import * as actionTypes from './actionTypes';
import axios from 'axios';

function randomize(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Action creators
export const selectRover = (rover) => {
	return {
		type: actionTypes.SELECT_ROVER,
		roverName: rover
	};
};

export const selectPictureWidth = (width) => {
	return {
		type: actionTypes.SELECT_PICTURE_WIDTH,
		pictureWidth: width
	};
};

export const selectPictureHeight = (height) => {
	return {
		type: actionTypes.SELECT_PICTURE_HEIGHT,
		pictureHeight: height
	};
};

export const selectSolDate = (solDate) => {
	return {
		type: actionTypes.SELECT_SOL_DATE,
		solDate: solDate
	}
}

export const searchBegin = () => {
	return {
		type: actionTypes.SEARCH_BEGIN
	}
}

export const successfulSearch = (pictureData, earthDate) => {
	return {
		type: actionTypes.SEARCH_SUCCESSFUL,
		pictureData: pictureData,
		earthDate: earthDate
	}
}

export const failedSearch = () => {
	return {
		type: actionTypes.SEARCH_FAILED
	}
}


export const beginSearch = (rover, typeOfSearch) => {
	return dispatch => {
		dispatch(searchBegin());
		const solDate = randomize(800, 2000);
		dispatch(selectSolDate(solDate));
		
		//https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos
		let url = '';
		if (typeOfSearch === undefined) {
			url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + solDate + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
		} else {
			url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'+ rover +'/latest_photos?api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
		}
		
			axios.get(url)
	        .then(response => {
	        	let arrayOfRoverPictures = null;
	        	// Here we rename the property latest_photos for photos, so the
	        	//last if statemente doesn't change
	        	const renameProp = (oldProp,newProp,{ [oldProp]: p }) => {
	        		return {[newProp]: p};
					}
	        	if (response.data.latest_photos !== undefined) {//si es search latest
	        		arrayOfRoverPictures = renameProp('latest_photos', 'photos', response.data);
	        	} else {
	        		arrayOfRoverPictures = response.data;
	        	}        	

	        	if (arrayOfRoverPictures.photos.length > 0) {
	        		dispatch(successfulSearch(arrayOfRoverPictures, arrayOfRoverPictures.photos[0].earth_date));
	        	} else {
	        		dispatch(failedSearch());
	        	}
	        })
	        .catch(error => {
	        	console.log('Error: ', error);
	        	dispatch(failedSearch());
	        });
	};
};