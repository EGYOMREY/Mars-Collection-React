import React from 'react';
import {Input, Row, Button, Col } from 'react-materialize';
import './Menu.css';
const menu = () => (
	<div className="Menu">
	<Row>
		<Col s={12} className=''>
	   <p>Welcome to the Mars Collection, where you can see pictures of the Red Planet. Select between the 3 rovers to display pictures of their missions in Mars, how many pictures to display and their dimentions. </p>
		</Col>
	</Row>
	   <Row>
	      <Col s={12} className=''>
	      <Input s={6} type='select' label="Rover" defaultValue='1'>
	      <option value='1'>Curiosity</option>
	      <option value='2'>Opportunity</option>
	      <option value='3'>Spirit</option>
	      </Input>
	      <Input s={6} type='select' label="No. of Pictures" defaultValue='6'>
	      <option value='6'>6</option>
	      <option value='7'>7</option>
	      <option value='8'>8</option>
	      <option value='9'>9</option>
	      <option value='10'>10</option>
	      <option value='11'>11</option>
	      <option value='12'>12</option>
	      </Input>
	      </Col>
	   </Row>
	   <Row>
	      <Col s={12} className=''>
	      <Input s={6} type='select' label="Picture Width" defaultValue='2'>
	      <option value='1'>200</option>
	      <option value='2'>300</option>
	      <option value='3'>400</option>
	      <option value='4'>500</option>
	      <option value='5'>600</option>
	      </Input>
	      <Input s={6} type='select' label="Picture Height" defaultValue='2'>
	      <option value='1'>200</option>
	      <option value='2'>300</option>
	      <option value='3'>400</option>
	      <option value='4'>500</option>
	      <option value='5'>600</option>
	      </Input>
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
export default menu;