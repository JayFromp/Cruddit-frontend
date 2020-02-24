import axios from "axios";

const getUsers = () => {
  return axios
    .get(`https://jay-nc-news-api.herokuapp.com/api/users`)
    .then(({ data: { users } }) => {
      return users;
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
    });
};
export { getUsers, getArticles };
