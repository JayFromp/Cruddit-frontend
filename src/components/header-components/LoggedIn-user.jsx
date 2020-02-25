import React from "react";

const LoggedInUser = props => {
  const { user, logOut } = props;

  return (
    <section>
      hello {user.user}
      <p>
        <button className="logOut" onClick={() => logOut()}>
          log out
        </button>
      </p>
    </section>
  );
};

export default LoggedInUser;
