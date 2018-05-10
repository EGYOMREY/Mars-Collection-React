import React, { Component } from 'react';

import MenuOptions from '../MenuOptions/MenuOptions';
import PictureDisplayer from '../PictureDisplayer/PictureDisplayer';

import axios from 'axios';

import './Home.css';

class Home extends Component {

	state = {
		chosenRover: 'Curiosity',
		widthPic: 300,
		heightPic: 300,
		picsToDisplay: '6',
		pictureData: null,
		likedPictures: [],
		loading: false,
		initialSearchBegan: false,
		earthDate: null,
		requestError: false,
		solDate: null
	}

	chooseRoverHandler = (event) => {
		this.setState({chosenRover: event.target.value});
	}

	choosePicsToDisplayHandler = (event) => {
		this.setState({picsToDisplay: event.target.value});
	}

	chooseWidthHandler = (event) => {
		this.setState({widthPic: event.target.value});
	}

	chooseHeightHandler = (event) => {
		this.setState({heightPic: event.target.value});
	}

	addToFavoritesHandler = (picture) => {
		this.setState({likedPictures: [...this.state.likedPictures, picture]});
	}


	axiosCall = () => {
		function randomize(min, max) {
	        return Math.floor(Math.random() * (max - min + 1) + min);
	    }
	    let solParameter = randomize(1000, 2000);
	    this.setState({loading: true, initialSearchBegan: true});
		let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + this.state.chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
			axios.get(url)
	        .then(response => {
	        	const marsData = response.data;
	        	if (response.data.photos.length > 0) {
	        		this.setState({pictureData: marsData, loading: false, earthDate: response.data.photos[0].earth_date, solDate: solParameter});
	        	} else {
	        		this.setState({loading: false});
	        	}
	        })
	        .catch(error => {
	        	console.log("SEARCH AGAIN, ERROR: ", error);
	        	this.setState({requestError: true, loading: false});
	        });
	}

	render() {

		return (
			<div className="Home">
				<MenuOptions 
				chooseRover={this.chooseRoverHandler}
				choosePicsToDisplay={this.choosePicsToDisplayHandler}
				chooseWidth={this.chooseWidthHandler}
				chooseHeight={this.chooseHeightHandler}
				searchHandler={this.axiosCall}
				/>
				<PictureDisplayer 
				isLoading={this.state.loading}
				photosData={this.state.pictureData}
				addToFavorites={this.addToFavoritesHandler}
				initialSearchBegan={this.state.initialSearchBegan}
				pictureWidth={this.state.widthPic}
				pictureHeight={this.state.heightPic}
				picsToDisplay={this.state.picsToDisplay}
				earthDate={this.state.earthDate}
				requestError={this.state.requestError}/>
			</div>

			);
	
	}
}

export default Home;
