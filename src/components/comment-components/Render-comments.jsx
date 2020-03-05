import React from "react";
import CommentCard from "./Comment-card";

const RenderComments = props => {
  const { comments, deleteComment, user, loggedIn } = props;

  return comments.map(comment => {
    return (
      <section className="all-comments">
        <CommentCard
          comment={comment}
          deleteComment={deleteComment}
          user={user}
          loggedIn={loggedIn}
        />
      </section>
    );
  });
};

export default RenderComments;
