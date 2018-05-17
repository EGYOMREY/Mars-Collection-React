import React from "react";
import { Input } from "react-materialize";
import PropTypes from "prop-types";

const Dropdown = ({optionsToDisplay, size, selectLabel, handleSelection}) => {

	return (
		<Input
			s={size || 6}
			m={size || 6}
			type="select"
			label={selectLabel}
			onChange={handleSelection}
		>
			{optionsToDisplay.map(key => {
				return (
					<option key={key} value={key}>
						{key}
					</option>
				);
			})}
		</Input>
	);
};

Dropdown.propTypes = {
	optionsToDisplay: PropTypes.array.isRequired,
	size: PropTypes.number,
	selectLabel: PropTypes.string.isRequired,
	handleSelection: PropTypes.func.isRequired
};

export default Dropdown;
