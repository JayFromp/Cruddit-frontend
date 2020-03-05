import React from "react";
import Error from "../errors";

import { Link } from "@reach/router";
import { patchCommentVotes } from "../../api-requests";
import moment from "moment";

class CommentCard extends React.Component {
  state = {
    votes: 0,
    userVotedUp: false,
    userVotedDown: false,
    error: null
  };

  render() {
    const { comment, deleteComment, user, loggedIn } = this.props;
    const { votes, userVotedUp, userVotedDown, error } = this.state;
    const commentAuthor = user.user === comment.author ? "You" : comment.author;

    const time = moment(comment.created_at).fromNow();
    return (
      <>
        {error ? (
          <Error />
        ) : (
          <article className="comment-container">
            <h7 className="comment-card-header"></h7>

            <section className="comment-card-header-main">
              <main className="comment-card-header-text-main">
                posted by{" "}
                <Link
                  to={`/articles/authors/${comment.author}`}
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    fontWeight: "bold"
                  }}
                >
                  {commentAuthor}
                </Link>{" "}
                {time}
              </main>
            </section>
            <section className="comment-card-body">
              <body className="comment-card-body-text"></body>
              {comment.body}
            </section>
            <aside className="comment-votes">{comment.votes + votes}</aside>
            {user.user === comment.author && (
              <button
                className="delete-comment"
                onClick={() => {
                  if (window.confirm("Are you sure?")) deleteComment(comment);
                }}
              >
                X
              </button>
            )}
            {loggedIn && (
              <button
                className="comment-vote-up"
                value="add"
                disabled={userVotedUp}
                onClick={event => {
                  this.amendVotes(comment.comment_id, event.target.value);
                }}
              >
                +
              </button>
            )}
            {loggedIn && (
              <button
                className="comment-vote-down"
                value="subtract"
                disabled={userVotedDown}
                onClick={event => {
                  this.amendVotes(comment.comment_id, event.target.value);
                }}
              >
                -
              </button>
            )}
          </article>
        )}
      </>
    );
  }
  amendVotes = (commentId, value) => {
    if (value === "add") {
      this.setState({
        votes: this.state.votes + 1,
        userVotedUp: true,
        userVotedDown: false
      });
      patchCommentVotes(commentId, { inc_votes: 1 }).catch(err => {
        this.setState({ error: err });
      });
    }
    if (value === "subtract") {
      this.setState({
        votes: this.state.votes - 1,
        userVotedDown: true,
        userVotedUp: false
      });
      patchCommentVotes(commentId, { inc_votes: -1 }).catch(err => {
        this.setState({ error: err });
      });
    }
  };
}

export default CommentCard;
