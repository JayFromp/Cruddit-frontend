import React from "react";
import { Link } from "@reach/router";
import moment from "moment";

const RenderArticle = ({ article }) => {
  const time = moment(article.created_at).fromNow();

  return (
    <article className="single-article-container">
      <section className="single-article-header">
        <h7 className="single-article-header-title">{article.title}</h7>
      </section>

      <section className="single-article-subHeader">
        <h10 className="single-article-subHeader-title">
          posted in{" "}
          <Link
            to={`/articles/topics/${article.topic}`}
            style={{ textDecoration: "none", color: "grey" }}
            className="sub-topic"
          >
            {article.topic}
          </Link>{" "}
          {time}
        </h10>
      </section>
      <body className="single-article-body">
        <div className="single-article-body-text">{article.body}</div>
      </body>
      <aside className="single-article-votes-container">
        <div className="single-article-votes"></div>
      </aside>
    </article>
  );
};

export default RenderArticle;
