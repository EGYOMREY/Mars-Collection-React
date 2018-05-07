import React from 'react';

import Curiosity from '../../assets/rover_curiosity.jpg';
import {Button} from 'react-materialize';


const picture = () => (
	<div style={{position: 'relative'}}>
		<img  src={Curiosity} style={{width: "400px", maxWidth: "100%"}} alt="curiosity"/>
		<div style={{position: 'absolute', width: '100%', bottom: '10%', display: 'flex', justifyContent: 'space-around'}}>
		<Button floating large className='pink' waves='light' icon='favorite' />
		</div>
	</div>
);
export default picture;