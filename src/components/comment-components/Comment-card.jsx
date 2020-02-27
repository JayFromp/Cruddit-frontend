import React from "react";
import { patchCommentVotes } from "../../api-requests";

class CommentCard extends React.Component {
  state = {
    votes: 0,
    userVotedUp: false,
    userVotedDown: false
  };

  render() {
    const { comment, deleteComment } = this.props;
    return (
      <p>
        <div className="comment-container">
          <div className="comment-card-header">
            <div className="comment-card-header-text">{comment.author}</div>
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
          <div className="comment-votes">
            {comment.votes + this.state.votes}
          </div>
          <button
            className="delete-comment"
            onClick={() => {
              deleteComment(comment);
            }}
          >
            X
          </button>
          <button
            className="vote-up"
            value="add"
            onClick={event => {
              this.amendVotes(comment.comment_id, event.target.value);
            }}
          >
            +
          </button>
          <button
            className="vote-down"
            value="subtract"
            onClick={event => {
              this.amendVotes(comment.comment_id, event.target.value);
            }}
          >
            -
          </button>
        </div>
      </p>
    );
  }
  amendVotes = (commentId, value) => {
    if (value === "add") {
      this.setState({
        votes: this.state.votes + 1,
        userVotedUp: true
      });
      patchCommentVotes(commentId, { inc_votes: 1 });
    }
    if (value === "subtract") {
      this.setState({
        votes: this.state.votes - 1,
        userVotedDown: true
      });
      patchCommentVotes(commentId, { inc_votes: -1 });
    }
  };
}

export default CommentCard;
