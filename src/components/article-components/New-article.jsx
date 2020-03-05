import React from "react";

class NewArticle extends React.Component {
  state = {
    title: "",
    body: "",
    author: "",
    topic: ""
  };

  render() {
    const { topic } = this.props;
    return (
      <section className="article-submit-container">
        <form onSubmit={this.handleSubmit} className="article-submit-form">
          <p className="new-article-header">Add new article</p>
          <p>
            <input
              className="new-article-title"
              type="text"
              placeholder="article title"
              name="title"
              required="please add text"
              value={this.state.title}
              onChange={this.handleInput}
            ></input>
          </p>
          <p>
            <textarea
              className="new-article-body"
              type="text"
              placeholder="what would you like to say?"
              name="body"
              required="please add text"
              value={this.state.body}
              onChange={this.handleInput}
            ></textarea>
          </p>
          <p>
            {!topic && (
              <select
                name="topic"
                onChange={this.handleInput}
                required="please select option"
                className="topic-select"
              >
                <option
                  selected
                  disabled
                  hidden
                  style={{ display: "none" }}
                  value=""
                >
                  select topic
                </option>
                <option value="cooking">Cooking</option>
                <option value="football">Football</option>
                <option value="coding">Coding</option>
              </select>
            )}
          </p>
          <button className="add-article-button">add</button>
        </form>
      </section>
    );
  }

  handleInput = event => {
    const { user, topic } = this.props;
    const key = event.target.name;
    const newValue = event.target.value;

    topic
      ? this.setState({ author: user, topic: topic, [key]: newValue })
      : this.setState({ author: user, [key]: newValue });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newArticle = this.state;
    this.props.addArticle(newArticle);
    this.setState({ title: "", body: "", author: "", topic: "" });
  };
}

export default NewArticle;

// new Article comp is rendered in AllArticles, which has all article data;
// Article input needs to render a form, with 4 different inputs
// title & body: written in input - errors if this is empty
// author: needs to be passed in from AllArticles to newArticle state
// topic: needs to be specified from a dropdown but act differently is there is a topic slug property

// create a handle input function, which can be used for both title & body to set their state
// create a handlesubmit function, which makes a new article from the state and passed it back to AllArticles
// AllArticles then invokes a function which first makes an api request and sets the new state of articles
