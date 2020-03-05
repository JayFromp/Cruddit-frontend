import React from "react";
import ArticleCard from "../article-components/Article-card";

const ArticleList = ({ articles, deleteArticle, user, loggedIn }) => {
  return articles.map(article => {
    return (
      <ArticleCard
        article={article}
        deleteArticle={deleteArticle}
        user={user}
        loggedIn={loggedIn}
        key={article.article_id}
      />
    );
  });
};

export default ArticleList;
