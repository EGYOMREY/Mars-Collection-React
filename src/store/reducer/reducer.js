import * as actionTypes from '../actions/actionTypes';

const initialState = {
		chosenRover: 'Curiosity',
		widthPic: 300,
		heightPic: 300,
		pictureData: null,
		likedPictures: [],
		loading: false,
		initialSearchBegan: false,
		earthDate: null,
		requestError: false,
		solDate: null
}

const selectRover = (state, action) => {
	console.log(action.roverName);
	return {
		...state,
		chosenRover: action.roverName
	}
}

const selectPictureWidth = (state, action) => {
	console.log(action.pictureWidth);
	return {
		...state,
		widthPic: action.pictureWidth
	}
}

const selectPictureHeight = (state, action) => {
	console.log(action.pictureHeight);
	return {
		...state,
		heightPic: action.pictureHeight
	}
}

const selectSolDate = (state, action) => {
	console.log(action.solDate);
	return {
		...state,
		solDate: action.solDate
	}
}

const searchBegan = (state, action) => {
	return {
		...state,
		loading: true,
		initialSearchBegan: true,
		requestError: false
	}
}

const searchSuccessful = (state, action) => {
	return {
		...state,
		pictureData: action.pictureData,
		earthDate: action.earthDate,
		loading: false
	}
}


const searchFailed = (state, action) => {
	return {
		...state,
		loading: false,
		requestError: true,
		pictureData: null
	}
}


const addToFavorites = (state,action) => {
	return {
		...state,
		likedPictures: [...state.likedPictures, action.pictureSource]
	}
}


const reducer = (state = initialState, action) => {
	//console.log(state);
	switch (action.type) {
		case actionTypes.SELECT_ROVER: return selectRover(state,action);
		case actionTypes.SELECT_PICTURE_WIDTH: return selectPictureWidth(state,action);
		case actionTypes.SELECT_PICTURE_HEIGHT: return selectPictureHeight(state, action);
		case actionTypes.SELECT_SOL_DATE: return selectSolDate(state, action);
		case actionTypes.SEARCH_BEGAN: return searchBegan(state,action);
		case actionTypes.SEARCH_SUCCESSFUL: return searchSuccessful(state,action);
		case actionTypes.SEARCH_FAILED: return searchFailed(state, action);
		case actionTypes.ADD_TO_FAVORITES: return addToFavorites(state, action);
		default: return state;
	}
	//console.log(state);

};

export default reducer;

