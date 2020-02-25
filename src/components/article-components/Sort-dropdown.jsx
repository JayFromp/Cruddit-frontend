import React from "react";

class SortDropdown extends React.Component {
  state = { listOpen: false };
  render() {
    const { listOpen } = this.state;
    const { sort } = this.props;
    return (
      <select
        className="sort-dd-container"
        onMouseEnter={() => {
          this.setList(true);
        }}
        onMouseLeave={() => {
          this.setList(false);
        }}
      >
        <h3 className={listOpen ? "sort-dd-headerHover" : "sort-header"}>
          <h3 className={listOpen ? "dd-header-title-bold" : "sort-header"}>
            sort by
          </h3>
        </h3>
        {listOpen && (
          <main className="sort-list-body">
            <body className="dd-list-items">
              <option
                key="created_at"
                value="created_at"
                className="sort-list-item"
                onClick={sort}
              >
                Date created
              </option>
              <option
                key="comment_count"
                value="comment_count"
                className="sort-list-item"
                onClick={sort}
              >
                Comments
              </option>
              <option
                key="votes"
                value="votes"
                className="sort-list-item"
                onClick={sort}
              >
                Votes
              </option>
            </body>
          </main>
        )}
      </select>
    );
  }
  setList = value => {
    this.setState({ listOpen: value });
  };
}

export default SortDropdown;
