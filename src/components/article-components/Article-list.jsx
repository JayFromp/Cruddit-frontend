import React from "react";
import { Link } from "@reach/router";

const ArticleList = ({ articles }) => {
  return articles.map(article => {
    return (
      <Link to="/articles/:article_id">
        <p>
          <article className="article-container">
            <h5 className="article-header"> {article.title}</h5>
            <h5 className="article-header">
              posted in
              <Link to={`/articles/topics/${article.topic}`}>
                {article.topic}{" "}
              </Link>{" "}
              by{" "}
              <Link to={`/articles/author/${article.author}`}>
                {article.author}
              </Link>{" "}
              on{" "}
            </h5>
            <time>{article.created_at} </time>
            <aside className="article-votes">{article.votes}</aside>
            <body className="article-body">{article.body}</body>
          </article>
        </p>
      </Link>
    );
  });
};

export default ArticleList;

// fixed header which doesnt hide
// split grid of app 1/8
// details of grid for smaller items
