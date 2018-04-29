import React, {Fragment} from 'react';

import {NavItem, Navbar, Icon} from 'react-materialize'
import './Navigation.css';
import favicon from '../../assets/favicon.png';


const navigation = (props) => {

const brandColor = <span style={{color: "#212121", paddingLeft: "1em"}}>Mars Collection</span>;

	return (
		<Navbar className="Navigation brand-logo cent" brand={brandColor} right>
		  <NavItem href='get-started.html'><Icon>home</Icon></NavItem>
		  <NavItem href='components.html'>My Pictures</NavItem>
		  <NavItem href='components.html'>Authentication</NavItem>
		  <NavItem href='components.html'>Learn More</NavItem>
		</Navbar>
	);

};


export default navigation;