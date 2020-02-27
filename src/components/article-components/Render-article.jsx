import React from "react";

const RenderArticle = ({ article }) => {
  return (
    <article className="single-article-container">
      <div className="single-article-header">
        <div className="single-article-header-title">{article.title}</div>
      </div>

      <div className="single-article-subHeader">
        <div className="single-article-subHeader-title">
          posted in{article.topic} on {article.created_at}
        </div>
      </div>
      <div className="single-article-body">
        <div className="single-article-body-text">{article.body}</div>
      </div>
      <div className="article-votes-container">
        <div className="article-votes">{article.votes}</div>
      </div>
    </article>
  );
};

export default RenderArticle;
