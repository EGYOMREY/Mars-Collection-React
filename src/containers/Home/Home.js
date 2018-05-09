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
		searchAgain: true,
		loading: false,
		initialSearchBegan: false,
		earthDate: null
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
	    this.setState({loading: true});
	   
		let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + this.state.chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
			axios.get(url)
	        .then(response => {
	        	const marsData = response.data;
	        	if (response.data.photos.length > 0) {
	        		this.setState({pictureData: marsData, loading: false, searchAgain: false, initialSearchBegan: true, earthDate: response.data.photos[0].earth_date});
	        	} else {
	        		console.log("Axios ELSE");
	        		this.setState({searchAgain: true});
	        	}
	        })
	        .catch(error => {
	        	console.log("SEARCH AGAIN, ERROR: ", error);
	        	this.setState({searchAgain: true});
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
				searchState={this.state.searchAgain}
				initialSearchBegan={this.state.initialSearchBegan}
				pictureWidth={this.state.widthPic}
				pictureHeight={this.state.heightPic}
				picsToDisplay={this.state.picsToDisplay}
				chosenRover={this.state.chosenRover}
				earthDate={this.state.earthDate}/>
			</div>

			);
	
	}
}

export default Home;
