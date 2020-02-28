import React from "react";

const TopicCard = ({ topic }) => {
  const topics = {
    coding:
      "https://nssdata.s3.amazonaws.com/images/galleries/18043/code-matrix.jpg",
    cooking: "https://i.ytimg.com/vi/B7UmUX68KtE/maxresdefault.jpg",
    football:
      "https://www.shortlist.com/media/imager/201905/22744-posts.article_md.jpg"
  };
  return (
    <div className="topic-container">
      {" "}
      <img src={topics[topic]} className="topic-background" />
      {/* <div className="topic-text">{topic}</div> */}
    </div>
  );
};

export default TopicCard;
