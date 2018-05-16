import * as actionTypes from './actionTypes';
import axios from 'axios';

function randomize(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Action creators
//MenuOptions
export const selectRover = (rover) => {
	return {
		type: actionTypes.SELECT_ROVER,
		roverName: rover
	};
};
//MenuOptions
export const selectPictureWidth = (width) => {
	return {
		type: actionTypes.SELECT_PICTURE_WIDTH,
		pictureWidth: width
	};
};
//MenuOptions
export const selectPictureHeight = (height) => {
	return {
		type: actionTypes.SELECT_PICTURE_HEIGHT,
		pictureHeight: height
	};
};

// For ajax call
export const selectSolDate = () => {
	return {
		type: actionTypes.SELECT_SOL_DATE,
		solDate: randomize(100, 2000)
	}
}
// For ajax call
export const searchBegan = () => {
	return {
		type: actionTypes.SEARCH_BEGAN
		//this.setState({loading: true, initialSearchBegan: true});
	}
}
// For ajax call
export const successfulSearch = (pictureData, earthDate) => {
	return {
		type: actionTypes.SEARCH_SUCCESSFUL,
		pictureData: pictureData,
		earthDate: earthDate
		//this.setState({pictureData: response.data, loading: false, earthDate: response.data.photos[0].earth_date, solDate: solParameter});
	}
}
// For ajax call
export const failedSearch = () => {
	return {
		type: actionTypes.SEARCH_FAILED
		//this.setState({loading: false, requestError: true});
	}
}


export const beginSearch = (rover, solDate) => {
	return dispatch => {
		dispatch(selectSolDate());
		dispatch(searchBegan());
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


export const addPictureToFavorites = (pictureSource) => {
	return {
		type: actionTypes.ADD_TO_FAVORITES,
		pictureSource: pictureSource
	}
}