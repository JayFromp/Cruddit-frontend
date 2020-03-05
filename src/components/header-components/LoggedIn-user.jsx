import React from "react";

const LoggedInUser = props => {
  const { user, logOut } = props;

  return (
    <section className="loggedIn">
      <body className="display-userName">{user.user}</body>

      <button className="logOut" onClick={() => logOut()}>
        log out
      </button>
    </section>
  );
};

export default LoggedInUser;
