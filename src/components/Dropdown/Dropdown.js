import React from 'react';
import {Input } from 'react-materialize';

const dropdown = (props) => {

	let options = props.optionsToDisplay;
	return (
		<Input 
		s={props.size || 6}
		m={props.size || 6}
		type='select' 
		label={props.selectLabel} 
		onChange={props.handleSelection}>
			{options.map(key => {
				return (
					<option key={key} value={key}>{key}</option>
				)
			})}
		</Input>
	);
}

export default dropdown;