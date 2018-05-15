import React from "react";

import MessageDisplayer from "../../components/MessageDisplayer/MessageDisplayer";
import Pictures from "../../components/Pictures/Pictures";
import "./PicturesContainer.css";



const picturesContainer = (props) => (
			<div className="PicturesContainer">
				<MessageDisplayer />
				<Pictures />
			</div>
		);

	



export default picturesContainer;

