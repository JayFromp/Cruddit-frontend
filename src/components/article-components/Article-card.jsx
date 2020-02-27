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
    const { article, deleteArticle } = this.props;
    const { votes } = this.state;
    return (
      <p>
        <article className="article-container">
          <h5 className="article-header"> {article.title}</h5>
          <h5 className="article-header">
            posted in
            <Link to={`/articles/topics/${article.topic}`}>
              {article.topic}{" "}
            </Link>{" "}
            by{" "}
            <Link to={`/articles/authors/${article.author}`}>
              {article.author}
            </Link>{" "}
            on{" "}
          </h5>
          <time>{article.created_at} </time>
          <aside className="article-votes">{article.votes + votes}</aside>
          <button
            className="delete-button"
            onClick={() => deleteArticle(article)}
          >
            X
          </button>
          <button
            className="article-vote-up"
            value="add"
            onClick={event =>
              this.amendVotes(article.article_id, event.target.value)
            }
          >
            +
          </button>
          <button
            className="article-vote-down"
            value="subtract"
            onClick={event =>
              this.amendVotes(article.article_id, event.target.value)
            }
          >
            -
          </button>
          <Link to={`/articles/${article.article_id}`}>
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
        userVotedUp: true
      });
      patchArticleVotes(articleId, { inc_votes: 1 });
    }
    if (value === "subtract") {
      this.setState({
        votes: this.state.votes - 1,
        userVotedDown: true
      });
      patchArticleVotes(articleId, { inc_votes: -1 });
    }
  };
}
export default ArticleCard;
