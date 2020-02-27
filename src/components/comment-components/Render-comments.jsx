import React from "react";
import CommentCard from "./Comment-card";

const RenderComments = props => {
  const { comments, deleteComment, user, loggedIn } = props;
  return comments.map(comment => {
    console.log(comment);
    return (
      <CommentCard
        comment={comment}
        deleteComment={deleteComment}
        user={user}
        loggedIn={loggedIn}
      />
    );
  });
};

export default RenderComments;
