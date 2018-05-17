import React from "react";

import ArticleBody from "./ArticleBody/ArticleBody";
import "./InformativeArticle.css";

const informativeArticle = props => {
	let information = props.articleInfo;
	let article = information.map((ob, index) => {
		return (
			<ArticleBody
				key={index}
				articleTitle={ob.title}
				articleBody={ob.bodyArticle}
			/>
		);
	});
	return <article className="mars-article">{article}</article>;
};

export default informativeArticle;
