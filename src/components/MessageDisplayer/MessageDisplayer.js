import React from 'react';
import { Row, Col } from 'react-materialize';

import './MessageDisplayer.css';


const messageDisplayer = (props) => (
	<Row>
		<Col s={12} className='MessageDisplayer'>
		<p>{props.children}</p>
		</Col>
	</Row>


);


export default messageDisplayer;