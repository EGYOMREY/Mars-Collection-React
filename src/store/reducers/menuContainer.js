import * as actionTypes from "../actions/actionTypes";

const initialState = {
	chosenRover: "Curiosity",
	widthPic: 300,
	heightPic: 300,
	pictureData: null,
	loading: false,
	initialSearchBegan: false,
	earthDate: null,
	requestError: false,
	solDate: 0
};

const selectRover = (state, action) => {
	return {
		...state,
		chosenRover: action.roverName
	};
};

const selectPictureWidth = (state, action) => {
	return {
		...state,
		widthPic: action.pictureWidth
	};
};

const selectPictureHeight = (state, action) => {
	return {
		...state,
		heightPic: action.pictureHeight
	};
};

const selectSolDate = (state, action) => {
	return {
		...state,
		solDate: action.solDate
	};
};

const searchBegin = (state, action) => {
	return {
		...state,
		loading: true,
		initialSearchBegan: true,
		requestError: false
	};
};

const searchSuccessful = (state, action) => {
	return {
		...state,
		pictureData: action.pictureData,
		earthDate: action.earthDate,
		loading: false
	};
};

const searchFailed = (state, action) => {
	return {
		...state,
		loading: false,
		requestError: true,
		pictureData: null
	};
};



const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_ROVER: return selectRover(state, action);
		case actionTypes.SELECT_PICTURE_WIDTH: return selectPictureWidth(state, action);
		case actionTypes.SELECT_PICTURE_HEIGHT: return selectPictureHeight(state, action);
		case actionTypes.SELECT_SOL_DATE: return selectSolDate(state, action);
		case actionTypes.SEARCH_BEGIN: return searchBegin(state, action);
		case actionTypes.SEARCH_SUCCESSFUL: return searchSuccessful(state, action);
		case actionTypes.SEARCH_FAILED: return searchFailed(state, action);
		default:
			return state;
	}
};

export default reducer;
