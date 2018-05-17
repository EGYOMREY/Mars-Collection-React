import React from "react";
import { Row, Col } from "react-materialize";
import PropTypes from 'prop-types'

import "./MessageDisplayer.css";

const MessageDisplayer = ({children}) => {
	return (
		<Row>
			<Col s={12} className="MessageDisplayer">
				<p>{children}</p>
			</Col>
		</Row>
	);
};

MessageDisplayer.propTypes = {
  children: PropTypes.string.isRequired
};


export default MessageDisplayer;