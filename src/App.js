import React from "react";
import Header from "./components/header-components/Header";
import AllArticles from "./components/article-components/All-articles";
import { getUsers } from "./api-requests";
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
        <AllArticles />
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

// app needs to bring in all users
// login dropdown
