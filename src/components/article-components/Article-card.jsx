import React from "react";
import Error from "../errors";
import moment from "moment";

import { patchArticleVotes } from "../../api-requests";
import { Link } from "@reach/router";

class ArticleCard extends React.Component {
  state = {
    votes: 0,
    userVotedUp: false,
    userVotedDown: false,
    error: null
  };
  render() {
    const { article, deleteArticle, user, loggedIn } = this.props;
    const { votes, userVotedDown, userVotedUp, error } = this.state;
    const articleAuthor = user === article.author ? "You" : article.author;
    const time = moment(article.created_at).fromNow();
    return (
      <section className="all-articles-container">
        {error ? (
          <Error />
        ) : (
          <section className="article-container">
            <Link
              to={`/articles/${article.article_id}`}
              className="article-header-main"
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Verdana"
              }}
            >
              {" "}
              {article.title}
            </Link>
            <div className="article-header-sub">
              posted in {""}
              <Link
                to={`/articles/topics/${article.topic}`}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  fontWeight: "bold"
                }}
                className="sub-topic"
              >
                {article.topic}{" "}
              </Link>{" "}
              by{" "}
              <Link
                to={`/articles/authors/${article.author}`}
                style={{
                  textDecoration: "none",
                  color: "grey",
                  fontWeight: "bold"
                }}
                className="sub-author"
              >
                {articleAuthor}
              </Link>{" "}
              {time} - {article.comment_count} comments
            </div>

            <section className="article-votes-container">
              <aside className="article-votes">{article.votes + votes}</aside>
            </section>
            {user === article.author && (
              <button
                className="delete-button-article"
                onClick={() => {
                  if (window.confirm("Are you sure?")) deleteArticle(article);
                }}
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
              <main className="article-body">{article.body}</main>
            </Link>
          </section>
        )}
      </section>
    );
  }

  amendVotes = (articleId, value) => {
    if (value === "add") {
      this.setState({
        votes: this.state.votes + 1,
        userVotedUp: true,
        userVotedDown: false
      });
      patchArticleVotes(articleId, { inc_votes: 1 }).catch(err => {
        this.setState({ error: err });
      });
    }
    if (value === "subtract") {
      this.setState({
        votes: this.state.votes - 1,
        userVotedDown: true,
        userVotedUp: false
      });
      patchArticleVotes(articleId, { inc_votes: -1 }).catch(err => {
        this.setState({ error: err });
      });
    }
  };
}
export default ArticleCard;
