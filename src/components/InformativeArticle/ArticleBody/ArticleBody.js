import React, { Fragment } from "react";

const articleBody = props => (
	<Fragment>
		<h1>{props.articleTitle}</h1>
		<p>{props.articleBody}</p>
	</Fragment>
);

export default articleBody;
