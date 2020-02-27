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
        <label>
          {" "}
          <input
            placeholder="write a comment"
            type="text"
            name="commentInput"
            required="please add text"
            value={this.state.comment}
            onChange={this.handleInput}
          />
        </label>
        <button className="commentButton">comment</button>
      </form>
    );
  }
  handleInput = event => {
    const newComment = event.target.value;
    this.setState({ comment: newComment });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newComment = {
      username: this.props.user,
      body: this.state.comment
    };

    this.props.addComment(newComment);
    this.setState({ comment: "" });
  };
}

export default NewComment;
