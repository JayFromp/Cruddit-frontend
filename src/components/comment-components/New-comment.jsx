import React from "react";

class NewComment extends React.Component {
  state = {
    comment: ""
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="
          commentSubmitContainer"
      >
        {" "}
        <textarea
          placeholder="Write whatever you fancy"
          type="text"
          name="commentInput"
          required="please add text"
          value={this.state.comment}
          onChange={this.handleInput}
          className="comment-submit-text"
        />
        <section>
          <button className="commentButton">comment</button>
        </section>
      </form>
    );
  }
  handleInput = event => {
    const newComment = event.target.value;
    this.setState({ comment: newComment });
  };
  handleSubmit = event => {
    const { user } = this.props;

    event.preventDefault();
    const newComment = {
      username: user.user,
      body: this.state.comment
    };

    this.props.addComment(newComment);
    this.setState({ comment: "" });
  };
}

export default NewComment;
