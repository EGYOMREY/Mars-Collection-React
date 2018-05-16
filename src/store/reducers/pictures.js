import * as actionTypes from "../actions/actionTypes";

const initialState = {
	likedPictures: []
};


const addToFavorites = (state, action) => {
	return {
		...state,
		likedPictures: [...action.pictureSource]
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PICTURE_TO_FAVORITES: return addToFavorites(state, action);
		default:
			return state;
	}
};

export default reducer;
