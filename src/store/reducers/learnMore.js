import * as actionTypes from "../actions/actionTypes";

const initialState = {
  marsData: [],
  loading: false
};

const loadArticles = (state, action) => ({
  ...state,
  marsData: [...action.marsData],
  loading: false
});

const loadingArticles = (state, action) => ({
  ...state,
  loading: true
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_LEARN_MORE_ARTICLES:
      return loadArticles(state, action);
    case actionTypes.LOADING_ARTICLES:
      return loadingArticles(state, action);
    default:
      return state;
  }
};

export default reducer;
