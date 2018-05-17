import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({link, exact, children}) => (

	<li> 
		<NavLink
			to={link}
			exact={exact}>
			{children}
		</NavLink>
	</li>
);

export default NavigationItem;