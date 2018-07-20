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

export const selectSolDate = () => {
	return {
		type: actionTypes.SELECT_SOL_DATE,
		solDate: randomize(800, 2000)
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


export const beginSearch = (rover, solDate) => {
	return dispatch => {
		dispatch(selectSolDate());
		dispatch(searchBegin());
		let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + solDate + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
					axios.get(url)
	        .then(response => {
	        	if (response.data.photos.length > 0) {
	        		dispatch(successfulSearch(response.data, response.data.photos[0].earth_date));
	        	} else {
	        		dispatch(failedSearch());
	        	}
	        })
	        .catch(error => {
	        	dispatch(failedSearch());
	        });
	};
};