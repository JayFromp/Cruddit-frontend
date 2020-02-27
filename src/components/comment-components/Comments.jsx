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
    return (
      <div>
        <NewComment addComment={this.addComment} />
        <RenderComments
          comments={comments}
          deleteComment={this.deleteComment}
        />
      </div>
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
    console.log(article_id);

    postComment(article_id, newComment).then(addedComment => {
      this.setState(currentState => {
        return { comments: [addedComment, ...currentState.comments] };
      });
    });
  };

  deleteComment = commentToDelete => {
    removeComment(commentToDelete);
    const remainingComments = this.state.comments.filter(comment => {
      return comment !== commentToDelete;
    });
    this.setState({ comments: remainingComments });
  };
}

export default Comments;
