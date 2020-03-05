import React from "react";
import { Link } from "@reach/router";

const TopicLinks = props => {
  return (
    <nav className="topics-nav">
      <Link
        to={"/articles/topics/coding"}
        style={{
          textDecoration: "none",
          color: "lightGrey",
          fontFamily: "Courier"
        }}
        className="topics-nav-coding"
      >
        Coding{"  "}
      </Link>
      <Link
        to={"/articles/topics/cooking"}
        style={{
          textDecoration: "none",
          color: "lightGrey",
          fontFamily: "Courier"
        }}
        className="topics-nav-cooking"
      >
        Cooking{"  "}
      </Link>
      <Link
        to={"/articles/topics/football"}
        style={{
          textDecoration: "none",
          color: "lightGrey",
          fontFamily: "Courier"
        }}
        className="topics-nav-football"
      >
        Football
      </Link>
    </nav>
  );
};

export default TopicLinks;
