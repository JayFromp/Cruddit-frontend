import React from "react";
import RenderComments from "./Render-comments";
import NewComment from "./New-comment";
import { getComments, removeComment, postComment } from "../../api-requests";

class Comments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    const { comments } = this.state;
    const { user, loggedIn } = this.props;

    return (
      <section>
        {loggedIn && comments.length === 0 && (
          <body className="grey">Be the first to add a comment!</body>
        )}
        {loggedIn ? (
          <NewComment addComment={this.addComment} user={user} />
        ) : (
          <body className="please-login">
            please log in to comment & vote...
          </body>
        )}
        <aside className="no-of-comments">Comments: {comments.length} </aside>
        <RenderComments
          comments={comments}
          deleteComment={this.deleteComment}
          user={user}
          loggedIn={loggedIn}
        />
      </section>
    );
  }
  componentDidMount() {
    const { article_id } = this.props.article;
    getComments(article_id).then(allComments => {
      this.setState({ comments: allComments, loading: false });
    });
  }

  addComment = newComment => {
    const { article_id } = this.props.article;

    postComment(article_id, newComment).then(addedComment => {
      this.setState(currentState => {
        return { comments: [addedComment, ...currentState.comments] };
      });
    });
  };

  deleteComment = commentToDelete => {
    removeComment(commentToDelete).then(() => {
      this.setState(currentState => {
        const filteredComments = currentState.comments.filter(comment => {
          return comment !== commentToDelete;
        });
        return { comments: filteredComments };
      });
    });
  };
}

export default Comments;
