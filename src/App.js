import React from "react";
import Header from "./components/header-components/Header";
import AllArticles from "./components/article-components/All-articles";
import SingleArticle from "./components/article-components/Single-article";
import Err from "./components/errors";
import { getUsers } from "./api-requests";
import { Router } from "@reach/router";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loggedIn: false,
    selectedUser: { user: null, avatar: null },
    error: null
  };

  render() {
    const { users, loggedIn, selectedUser } = this.state;
    return (
      <div className="App">
        <Header
          users={users}
          loggedIn={loggedIn}
          logOut={this.logOut}
          selectUser={this.selectUser}
          selectedUser={selectedUser}
        />
        <Router className="all-articles">
          <AllArticles path="/" user={selectedUser.user} loggedIn={loggedIn} />
          <AllArticles
            path="/articles/topics/:topic_slug"
            user={selectedUser.user}
            loggedIn={loggedIn}
          />
          <AllArticles
            path="/articles/authors/:author"
            users={users}
            loggedIn={loggedIn}
          />
          <SingleArticle
            path="/articles/:article_id"
            user={selectedUser}
            loggedIn={loggedIn}
          />
          <Err default />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    getUsers()
      .then(allUsers => {
        this.setState({ users: allUsers });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  selectUser = event => {
    event.persist();
    const username = event.target.value;

    this.setState({
      loggedIn: true,
      selectedUser: { user: username }
    });
  };

  logOut = () => {
    this.setState({ loggedIn: false });
  };
}

export default App;

/*
- mobile responsiveness
- lines through headers
- delete button overwrites header in mobile view
- media queries not effecting font size
- articles grow too big when user is able to vote
- header grows when you log in
*/
