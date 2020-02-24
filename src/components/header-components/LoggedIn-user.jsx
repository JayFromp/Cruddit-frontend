import React from "react";

const LoggedInUser = props => {
  const { user, logOut } = props;

  return (
    <div>
      hello {user.user}
      <p>
        <div className="logOut" onClick={() => logOut()}>
          log out
        </div>
      </p>
    </div>
  );
};

export default LoggedInUser;
