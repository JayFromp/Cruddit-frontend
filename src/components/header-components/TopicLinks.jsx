import React from "react";

const TopicLinks = props => {
  return (
    <nav className="topics-nav">
      <Link to={"/articles/topics/coding"}>Coding</Link>
      <Link to={"/articles/topics/coding"}>Cooking</Link>
      <Link to={"/articles/topics/coding"}>Football</Link>
    </nav>
  );
};
