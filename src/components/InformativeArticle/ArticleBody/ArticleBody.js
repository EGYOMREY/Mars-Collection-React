import React from "react";
import PropTypes from 'prop-types'

const ArticleBody = ({articleTitle, articleBody}) => (
	<>
		<h1>{articleTitle}</h1>
		<p>{articleBody}</p>
	</>
);

ArticleBody.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  articleBody: PropTypes.string.isRequired
}

export default ArticleBody;

