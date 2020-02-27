import React from "react";
import ArticleCard from "../article-components/Article-card";

const ArticleList = ({ articles, deleteArticle }) => {
  return articles.map(article => {
    return <ArticleCard article={article} deleteArticle={deleteArticle} />;
  });
};

export default ArticleList;
