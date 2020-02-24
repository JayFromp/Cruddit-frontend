import React from "react";
import Home from "./Home";
import TopicLinks from "./TopicLinks";
import LoginDropDown from "./Login-dropdown";
import LoggedInUser from "./LoggedIn-user";

const Header = props => {
  const { users, selectUser, selectedUser, loggedIn, logOut } = props;
  console.log(">>user<<", selectedUser);
  return (
    <div className="Header">
      <Home />
      <TopicLinks />
      {loggedIn ? (
        <LoggedInUser user={selectedUser} logOut={logOut} />
      ) : (
        <LoginDropDown users={users} selectUser={selectUser} />
      )}
    </div>
  );
};

export default Header;
