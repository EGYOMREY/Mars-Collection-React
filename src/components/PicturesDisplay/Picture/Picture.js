import React from 'react';

import Curiosity from '../../../assets/rover_curiosity.jpg';
import {Button} from 'react-materialize';


const picture = () => (
	<div style={{position: 'relative'}}>
		<img  src={Curiosity} style={{width: "300px", maxWidth: "100%"}} alt="curiosity"/>
		<div style={{position: 'absolute', width: '100%', bottom: '10%', display: 'flex', justifyContent: 'space-around'}}>
		<Button floating large className='pink' waves='light' icon='favorite' /><Button floating large className='light-blue accent-4' waves='light' icon='save' />
		</div>
	</div>
);
export default picture;