import React from "react";

const SortDropdown = ({ sort }) => {
  return (
    <div className="sort-dd-container">
      <select className="dd-list-items" onChange={sort}>
        <option selected disabled hidden style={{ display: "none" }} value="">
          sort by...
        </option>
        <option key="created_at" value="created_at" className="sort-list-item">
          Date created
        </option>
        <option
          key="comment_count"
          value="comment_count"
          className="sort-list-item"
        >
          Comments
        </option>
        <option key="votes" value="votes" className="sort-list-item">
          Votes
        </option>
      </select>
    </div>
  );
};

export default SortDropdown;
