import React from "react";

const UserCard = ({ users, author }) => {
  const currentAuthor = users.filter(user => {
    return user.username === author;
  });
  const { avatar_url, username } = currentAuthor[0];

  return (
    <section className="user-container">
      <body className="author-name"> {author}</body>
    </section>
  );
};

export default UserCard;
