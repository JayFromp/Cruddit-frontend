import axios from "axios";

const getUsers = () => {
  return axios
    .get(`https://jay-nc-news-api.herokuapp.com/api/users`)
    .then(({ data: { users } }) => {
      return users;
    })
    .catch(err => {
      return err;
    });
};

const getArticles = (sortValue, selectedTopic, selectedAuthor) => {
  return axios
    .get("https://jay-nc-news-api.herokuapp.com/api/articles", {
      params: {
        sort_by: sortValue,
        topic: selectedTopic,
        author: selectedAuthor
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch(err => {
      return err;
    });
};

const getArticle = articleId => {
  console.log(articleId, "api value passed in");
  return axios
    .get(`https://jay-nc-news-api.herokuapp.com/api/articles/${articleId}`)
    .then(({ data: { article } }) => {
      return article;
    })
    .catch(err => {
      return err;
    });
};

const postArticle = article => {
  return axios
    .post(`https://jay-nc-news-api.herokuapp.com/api/articles`, article)
    .then(({ data }) => {
      console.log("data", data);
      return data.newArticle[0];
    })
    .catch(err => {
      return err;
    });
};

const removeArticle = articleId => {
  return axios.delete(
    `https://jay-nc-news-api.herokuapp.com/api/articles/${articleId}`
  );
};

const removeComment = comment => {
  const { comment_id } = comment;
  return axios.delete(
    `https://jay-nc-news-api.herokuapp.com/api/comments/${comment_id}`
  );
};

const getComments = articleId => {
  return axios
    .get(
      `https://jay-nc-news-api.herokuapp.com/api/articles/${articleId}/comments/`
    )
    .then(({ data }) => {
      return data.comments;
    })
    .catch(err => {
      return err;
    });
};

const postComment = (articleId, newComment) => {
  return axios
    .post(
      `https://jay-nc-news-api.herokuapp.com/api/articles/${articleId}/comments`,
      newComment
    )
    .then(({ data }) => {
      return data.comment;
    })
    .catch(err => {
      return err;
    });
};

const patchCommentVotes = (comment_id, changeVoteBy) => {
  return axios
    .patch(
      `https://jay-nc-news-api.herokuapp.com/api/comments/${comment_id}`,
      changeVoteBy
    )
    .catch(err => {
      return err;
    });
};

const patchArticleVotes = (article_id, changeVoteBy) => {
  return axios
    .patch(
      `https://jay-nc-news-api.herokuapp.com/api/articles/${article_id}`,
      changeVoteBy
    )
    .catch(() => {
      const { inc_votes } = changeVoteBy;
      const newValue = inc_votes > 0 ? -1 : 1;
      const newVotesObj = { inc_votes: [newValue] };
      return axios.patch(
        `https://jay-nc-news-api.herokuapp.com/api/articles/${article_id}`,
        newVotesObj
      );
    })
    .catch(err => {
      return err;
    });
};

export {
  getUsers,
  getArticles,
  getArticle,
  getComments,
  postArticle,
  removeArticle,
  removeComment,
  postComment,
  patchCommentVotes,
  patchArticleVotes
};
