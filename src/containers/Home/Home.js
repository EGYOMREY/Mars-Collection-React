import React from "react";

import MenuContainer from "./MenuContainer/MenuContainer";
import PicturesContainer from "./PicturesContainer/PicturesContainer";
import "./Home.css";

const home = () => (
	<div className="Home">
		<MenuContainer />
		<PicturesContainer />
	</div>
);

export default home;
