import React from "react";

const LoginDropDown = ({ users, selectUser }) => {
  return (
    <section className="login-container">
      <select className="login-list-items" onChange={selectUser}>
        <option selected disabled hidden>
          log in as...
        </option>
        {users.map(user => {
          return (
            <option className="login-list-item" value={user.username}>
              {user.username}{" "}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default LoginDropDown;
