import React from "react";

const LoggedInUser = props => {
  const { user, logOut } = props;

  return (
    <section className="loggedIn">
      <div className="display-userName">{user.user}</div>
      <p className="logOut-container">
        <button className="logOut" onClick={() => logOut()}>
          log out
        </button>
      </p>
    </section>
  );
};

export default LoggedInUser;
