import React from "react";
import Header from "./components/header-components/Header";
import AllArticles from "./components/article-components/All-articles";
import SingleArticle from "./components/article-components/Single-article";
import { getUsers } from "./api-requests";
import { Router } from "@reach/router";
import "./App.css";

class App extends React.Component {
  state = {
    users: null,
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
          <AllArticles
            path="/"
            user={this.state.selectedUser.user}
            loggedIn={loggedIn}
          />
          <AllArticles path="/articles/topics/:topic_slug" />
          <AllArticles path="/articles/authors/:author" />
          <SingleArticle path="/articles/:article_id" />
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

  selectUser = user => {
    const { username, avatar_url } = user;
    this.setState({
      loggedIn: true,
      selectedUser: { user: username, avatar: avatar_url }
    });
  };

  logOut = () => {
    this.setState({ loggedIn: false });
  };
}

export default App;

// do votes
/* errors for 
- invalid comment
- wrong article / comment id
-any incorrect page (default)

- display topic comp
- can add article to topic - topic is set to default of topic

- add user page (no add article)

- can only add a comment when logged in 
- can only delete comment if you're the user

-articles author defaults to 'you' if logged in as that user

- date turned into 'x hours ago'

- comments & articles have user images in them
- user image rendered in header

- can only vote once logged in
- can only vote once

*/
