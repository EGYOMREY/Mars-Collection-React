import React from 'react';

import {NavItem, Navbar, Icon} from 'react-materialize'
import './Navigation.css';



const navigation = (props) => {

const brandColor = <span style={{color: "#212121", paddingLeft: "1em", fontFamily: 'Roboto', fontSize: '2.5rem'}}>Mars Collection</span>;

	return (
		<Navbar className="deep-orange darken-2 Navigation" brand={brandColor} right>
		  <NavItem href='get-started.html'><Icon>home</Icon></NavItem>
		  <NavItem href='components.html'>My Pictures</NavItem>
		  <NavItem href='components.html'>Authentication</NavItem>
		  <NavItem href='components.html'>Learn More</NavItem>
		</Navbar>
	);

};


export default navigation;