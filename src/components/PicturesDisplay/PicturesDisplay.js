import React, {Fragment, Component} from 'react';

import Curiosity from '../../assets/rover_curiosity.jpg';

import {Button, Col, Card, CardTitle} from 'react-materialize'


//<img src={Curiosity} />
const picturesDisplay = () => (

	/*
	<Col m={6} s={12}>
		    <Card header={<CardTitle image={Curiosity}></CardTitle>} className='blue-grey darken-1' style={{width: '500px'}} textClassName='white-text' title='Card title' actions={<Fragment><Button waves='light'>Like</Button><Button waves='light'>Save</Button></Fragment>}>
		    </Card>
			</Col>
			*/

	<div>
		<div>
			<img src={Curiosity} style={{width: "300px", maxWidth: "100%"}}/>
		</div>
		<div>
		<Button waves='light'>Like</Button><Button waves='light'>Save</Button>
		</div>
	</div>

	);



export default picturesDisplay;