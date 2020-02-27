import React from "react";

class SortDropdown extends React.Component {
  state = { listOpen: false };
  render() {
    const { listOpen } = this.state;
    const { sort } = this.props;
    return (
      <div
        className="sort-dd-container"
        onMouseEnter={() => {
          this.setList(true);
        }}
        onMouseLeave={() => {
          this.setList(false);
        }}
      >
        <div className={listOpen ? "sort-dd-headerHover" : "sort-header"}>
          <div className={listOpen ? "dd-header-title-bold" : "sort-header"}>
            sort by
          </div>
        </div>
        {listOpen && (
          <div className="sort-list-body">
            <div className="dd-list-items">
              <div
                key="created_at"
                value="created_at"
                className="sort-list-item"
                onClick={sort}
              >
                Date created
              </div>
              <div
                key="comment_count"
                value="comment_count"
                className="sort-list-item"
                onClick={sort}
              >
                Comments
              </div>
              <div
                key="votes"
                value="votes"
                className="sort-list-item"
                onClick={sort}
              >
                Votes
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  setList = value => {
    this.setState({ listOpen: value });
  };
}

export default SortDropdown;
