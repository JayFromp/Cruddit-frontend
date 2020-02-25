import React from "react";
import { Link } from "@reach/router";

const TopicLinks = props => {
  return (
    <nav className="topics-nav">
      <Link
        to={"/articles/topics/coding"}
        style={{ textDecoration: "none", color: "grey" }}
      >
        Coding{" "}
      </Link>
      <Link
        to={"/articles/topics/cooking"}
        style={{ textDecoration: "none", color: "grey" }}
      >
        Cooking{" "}
      </Link>
      <Link
        to={"/articles/topics/football"}
        style={{ textDecoration: "none", color: "grey" }}
      >
        Football
      </Link>
    </nav>
  );
};

export default TopicLinks;
