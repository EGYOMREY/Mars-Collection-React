import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
//Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import picturesReducer from './store/reducers/pictures';
import menuContainerReducer from './store/reducers/menuContainer';
import learnMoreReducer from './store/reducers/learnMore';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	menuContainer: menuContainerReducer,
	pictures: picturesReducer,
	learnMore: learnMoreReducer
});


// from redux-thunk
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : null;
const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
	));


const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	);



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
