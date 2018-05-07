import React, {Component} from 'react';
import { Row, Button, Col } from 'react-materialize';

import './MenuOptions.css';
import Dropdown from '../../components/Dropdown/Dropdown';

import axios from 'axios';

class MenuOptions extends Component {
	state = {
		chosenRover: 'curiosity',
		widthPic: '300',
		heightPic: '300',
		normalSearch: true,
		randomSearch: false,
		picsToDisplay: '6',
		labels: {
			rovers: 'Rover',
			picsToDisplay: 'No. of Pictures',
			widthPic: 'Picture Width',
			heightPic: 'Picture Height'
		},
		rovers: ['Curiosity', 'Opportunity', 'Spirit'],
		picturestoDisplay: [6,7,8,9,10,11,12],
		pictureSizes: [200,300,400,500,600],
		pictureData: null
	}

	componentDidMount() {
		this.axiosCall();
	}
	chooseRoverHandler = (event, index, value) => {
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
		console.log(this.state);
	}

	shouldComponentUpdate (nextProps, nextState){
		return false;
	}

	axiosCall () {
	function randomize(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let solParameter = randomize(1000, 2000);
    let arreglo = null;

	let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + this.state.chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
		axios.get(url)
        .then(response => {
            //this.setState({pictureData: response.data});
            arreglo = response.data.photos;
            let filtrado = arreglo.filter( (el, index) => {
            	return index%2 === 1;
            })
            console.log(filtrado);
             console.log(arreglo);
        });

	}

	


	render () {
		return (
		<div className="Menu">
		    <Row>
		        <Col s={12}>
		        <p>Welcome to the Mars Collection, where you can see pictures of the Red Planet. Select between the 3 rovers to display pictures of their missions in Mars, how many pictures to display and their dimentions. </p>
		        </Col>
		    </Row>
		    <Row>
		        <Col s={12}>
		        <Dropdown 
		            optionsToDisplay={this.state.rovers} 
		            handleSelection={this.chooseRoverHandler}
		            selectLabel={this.state.labels.rovers}/>
		        <Dropdown 
		            optionsToDisplay={this.state.picturestoDisplay} 
		            handleSelection={this.choosePicsToDisplayHandler}
		            selectLabel={this.state.labels.picsToDisplay}/>
		        </Col>
		    </Row>
		    <Row>
		        <Col s={12}>
		        <Dropdown 
		            optionsToDisplay={this.state.pictureSizes} 
		            handleSelection={this.chooseWidthHandler}
		            selectLabel={this.state.labels.widthPic}/>
		        <Dropdown 
		            optionsToDisplay={this.state.pictureSizes} 
		            handleSelection={this.chooseHeightHandler}
		            selectLabel={this.state.labels.heightPic}/>
		        </Col>
		    </Row>
		    <Row>
		        <Button wave="light" className="deep-orange">Search</Button>
		    </Row>
		    <Row>
		        <Button wave="light" className="grey darken-1">Random Search</Button>
		    </Row>
		</div>
		);
	}
}
export default MenuOptions;