import React, { Component } from 'react';

import MenuOptions from '../MenuOptions/MenuOptions';
import PictureDisplayer from '../PictureDisplayer/PictureDisplayer';

import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';

import './Home.css';

class Home extends Component {

	state = {
		chosenRover: 'curiosity',
		widthPic: '300',
		heightPic: '300',
		picsToDisplay: '6',
		pictureData: null,
		likedPictures: [],
		searchAgain: true
	}

	componentDidMount() {
		this.axiosCall();
	}
	chooseRoverHandler = (event) => {
		this.setState({chosenRover: event.target.value});
		console.log(event.target.value);
	}

	choosePicsToDisplayHandler = (event) => {
		this.setState({picsToDisplay: event.target.value});
		console.log(event.target.value);
		}

	chooseWidthHandler = (event) => {
		this.setState({widthPic: event.target.value});
		console.log(event.target.value);
	}

	chooseHeightHandler = (event) => {
		this.setState({heightPic: event.target.value});
		console.log(event.target.value);

	}

	addToFavoritesHandler = (picture) => {
		console.log(this.state.likedPictures);
		const newLikedPictures = [...this.state.likedPictures, picture];
		this.setState({likedPictures: newLikedPictures});
		console.log(this.state.likedPictures);
	}

	

	axiosCall () {
	function randomize(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let solParameter = randomize(1000, 2000);
	let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + this.state.chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
		axios.get(url)
        .then(response => {
        	const marsData = response.data;
        	if (response.data.photos.length > 0) {
        		this.setState({pictureData: marsData});
        		this.setState({searchAgain: false});

        	} else {
        		this.setState({searchAgain: true});
        	}
        })
        .catch(error => {
        	console.log(error);
        });
	}


	render() {
		let displayPicturesComponent = <Loader absolutePosition />;
		if(!this.state.searchAgain) {
			displayPicturesComponent = (
				<PictureDisplayer
				photosData={this.state.pictureData}
				addToFavorites={this.addToFavoritesHandler}
				searchState={this.state.searchAgain}/>
				);
	}
		return (
			<div className="Home">
				<MenuOptions 
				chooseRover={this.chooseRoverHandler}
				choosePicsToDisplay={this.choosePicsToDisplayHandler}
				chooseWidth={this.chooseWidthHandler}
				chooseHeight={this.chooseHeightHandler}
				/>
				{displayPicturesComponent}
			</div>

			);
	
	}
}

export default Home;