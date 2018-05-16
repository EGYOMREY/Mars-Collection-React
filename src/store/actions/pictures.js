import * as actionTypes from "./actionTypes";

export const addPictureToFavorites = pictureSource => {
	var myPictures = JSON.parse(localStorage.getItem("myPictures") || "[]");
	if (pictureSource) {
		myPictures.push(pictureSource);
		localStorage["myPictures"] = JSON.stringify(myPictures);
	}
	return {
		type: actionTypes.ADD_PICTURE_TO_FAVORITES,
		pictureSource: myPictures
	};
};


