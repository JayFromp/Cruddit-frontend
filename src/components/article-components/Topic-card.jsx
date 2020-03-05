import React from "react";

const TopicCard = ({ topic }) => {
  return (
    <section className="topic-container">
      <body className="topic-text">{topic}</body>
    </section>
  );
};

export default TopicCard;
