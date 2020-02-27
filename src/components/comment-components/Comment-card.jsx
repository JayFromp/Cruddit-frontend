import React from "react";
import { Link } from "@reach/router";
import { patchCommentVotes } from "../../api-requests";

class CommentCard extends React.Component {
  state = {
    votes: 0,
    userVotedUp: false,
    userVotedDown: false
  };

  render() {
    const { comment, deleteComment, user, loggedIn } = this.props;
    const { votes, userVotedUp, userVotedDown } = this.state;
    const commentAuthor = user === comment.author ? "You" : comment.author;
    return (
      <p>
        <div className="comment-container">
          <div className="comment-card-header">
            <Link
              to={`/articles/authors/${comment.author}`}
              className="comment-card-header-text"
              style={{ textDecoration: "none" }}
            >
              {commentAuthor}
            </Link>
          </div>

          <div className="comment-card-header-main">
            <div className="comment-card-header-text-main">
              {comment.created_at}
            </div>
          </div>
          <div className="comment-card-body">
            <div className="comment-card-body-text"></div>
            {comment.body}
          </div>
          <div className="comment-votes">{comment.votes + votes}</div>
          {user === comment.author && (
            <button
              className="delete-comment"
              onClick={() => {
                deleteComment(comment);
              }}
            >
              X
            </button>
          )}
          {loggedIn && (
            <button
              className="vote-up"
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
              className="vote-down"
              value="subtract"
              disabled={userVotedDown}
              onClick={event => {
                this.amendVotes(comment.comment_id, event.target.value);
              }}
            >
              -
            </button>
          )}
        </div>
      </p>
    );
  }
  amendVotes = (commentId, value) => {
    if (value === "add") {
      this.setState({
        votes: this.state.votes + 1,
        userVotedUp: true,
        userVotedDown: false
      });
      patchCommentVotes(commentId, { inc_votes: 1 });
    }
    if (value === "subtract") {
      this.setState({
        votes: this.state.votes - 1,
        userVotedDown: true,
        userVotedUp: false
      });
      patchCommentVotes(commentId, { inc_votes: -1 });
    }
  };
}

export default CommentCard;
