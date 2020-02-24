import React from "react";
import Header from "./components/header-components/Header";
import "./App.css";

class App extends React.Component {
  state = {
    users: null,
    loggedIn: false,
    selectedUser: { username: null, avatar: null }
  };

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
  componentDidMount() {
    //get users
  }
}

export default App;

// app needs to bring in all users
// create a header that is going to sit at the top of all pages
// header takes:
// a title - which will also be a home button
// 3 links: coding, football, cooking
// login dropdown
