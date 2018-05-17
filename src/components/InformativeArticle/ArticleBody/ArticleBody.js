import React, { Fragment } from "react";
import PropTypes from 'prop-types'

const ArticleBody = ({articleTitle, articleBody}) => (
	<Fragment>
		<h1>{articleTitle}</h1>
		<p>{articleBody}</p>
	</Fragment>
);

ArticleBody.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  articleBody: PropTypes.string.isRequired
}

export default ArticleBody;

