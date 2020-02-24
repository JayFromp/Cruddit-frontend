import React from "react";

const ArticleList = ({ articles }) => {
  return articles.map(article => {
    return <div>{article.title}</div>;
  });
};

export default ArticleList;
