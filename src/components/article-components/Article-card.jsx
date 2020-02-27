import React from "react";
import { patchArticleVotes } from "../../api-requests";

import { Link } from "@reach/router";

class ArticleCard extends React.Component {
  state = {
    votes: 0,
    userVotedUp: false,
    userVotedDown: false
  };
  render() {
    const { article, deleteArticle, user, loggedIn } = this.props;
    const { votes, userVotedDown, userVotedUp } = this.state;
    const articleAuthor = user === article.author ? "You" : article.author;
    return (
      <p className="all-articles-container">
        <article className="article-container">
          <div className="article-header-main"> {article.title}</div>
          <div className="article-header-sub">
            posted in {""}
            <Link
              to={`/articles/topics/${article.topic}`}
              style={{ textDecoration: "none" }}
            >
              {article.topic}{" "}
            </Link>{" "}
            by{" "}
            <Link
              to={`/articles/authors/${article.author}`}
              style={{ textDecoration: "none" }}
            >
              {articleAuthor}
            </Link>{" "}
            on {article.created_at}
          </div>

          <div className="article-votes-container">
            <aside className="article-votes">{article.votes + votes}</aside>
          </div>
          {user === article.author && (
            <button
              className="delete-button"
              onClick={() => deleteArticle(article)}
            >
              X
            </button>
          )}
          {loggedIn && (
            <button
              className="article-vote-up"
              value="add"
              disabled={userVotedUp}
              onClick={event =>
                this.amendVotes(article.article_id, event.target.value)
              }
            >
              +
            </button>
          )}
          {loggedIn && (
            <button
              className="article-vote-down"
              value="subtract"
              disabled={userVotedDown}
              onClick={event =>
                this.amendVotes(article.article_id, event.target.value)
              }
            >
              -
            </button>
          )}
          <Link
            className="article-body-container"
            to={`/articles/${article.article_id}`}
            style={{ textDecoration: "none" }}
          >
            <body className="article-body">{article.body}</body>
          </Link>
        </article>
      </p>
    );
  }

  amendVotes = (articleId, value) => {
    if (value === "add") {
      this.setState({
        votes: this.state.votes + 1,
        userVotedUp: true,
        userVotedDown: false
      });
      patchArticleVotes(articleId, { inc_votes: 1 });
    }
    if (value === "subtract") {
      this.setState({
        votes: this.state.votes - 1,
        userVotedDown: true,
        userVotedUp: false
      });
      patchArticleVotes(articleId, { inc_votes: -1 });
    }
  };
}
export default ArticleCard;
