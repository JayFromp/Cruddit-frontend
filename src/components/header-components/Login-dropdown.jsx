import React from "react";

class LoginDropDown extends React.Component {
  state = {
    listOpen: false
  };
  render() {
    const { listOpen } = this.state;
    const { users, selectUser } = this.props;
    return (
      <div
        className="login-container"
        onMouseEnter={() => {
          this.setList(true);
        }}
        onMouseLeave={() => {
          this.setList(false);
        }}
      >
        <div className="login-header-container">
          <div className="login-header-title"></div>
          Log in as
        </div>
        {listOpen && (
          <div className="login-list-container">
            <div className="login-list-items"></div>
            {users.map(user => {
              return (
                <div
                  className="login-list-item"
                  onClick={() => {
                    selectUser(user);
                  }}
                >
                  {user.username}{" "}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
  setList = value => {
    this.setState({ listOpen: value });
  };
}

export default LoginDropDown;

// needs a conteiner, header container & header title div (2)
// on hover, invokes a function changing the boolean value of listOpen
// needs a list container & list items div (2) which renders only when listopen is true
