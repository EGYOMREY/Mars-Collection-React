import React from 'react';

import {Navbar, Icon} from 'react-materialize'
import './Navigation.css';

import NavigationItem from './NavigationItem/NavigationItem';


const Navigation = () => {

const brandColor = <span className="BrandColor">Mars Collection</span>;

	return (
		<Navbar className="deep-orange darken-2 Navigation" brand={brandColor} right options={{ closeOnClick: true }}>
			<NavigationItem link="/" exact><Icon>home</Icon></NavigationItem>
			<NavigationItem link="/mypictures">My Pictures</NavigationItem>
			<NavigationItem link="/learnmore">Learn More</NavigationItem>
		</Navbar>
	);

};


export default Navigation;

