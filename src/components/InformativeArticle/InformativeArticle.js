import React from "react";
import PropTypes from 'prop-types'

import ArticleBody from "./ArticleBody/ArticleBody";
import "./InformativeArticle.css";

const InformativeArticle = ({articleInfo}) => {
	let article = articleInfo.map((ob, index) => {
		return (
			<ArticleBody
				key={index}
				articleTitle={ob.title}
				articleBody={ob.bodyArticle}
			/>
		);
	});
	return <article className="InformativeArticle">{article}</article>;
};

InformativeArticle.propTypes = {
  articleInfo: PropTypes.array.isRequired,
}

export default InformativeArticle;
