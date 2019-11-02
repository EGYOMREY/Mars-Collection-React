import * as actionTypes from "./actionTypes";
import axios from "axios";

// Action creators
export const loadArticles = marsData => ({
  type: actionTypes.LOAD_LEARN_MORE_ARTICLES,
  marsData: marsData
});

export const loadingArticles = () => ({
  type: actionTypes.LOADING_ARTICLES
});

export const loadArticlesFromServer = () => {
  return dispatch => {
    dispatch(loadingArticles());
    let url = "https://mars-collection.firebaseio.com/marsSection.json";
    axios
      .get(url)
      .then(response => {
        dispatch(loadArticles(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
