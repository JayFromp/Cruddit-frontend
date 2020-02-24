import React from "react";
import ArticlesList from "./Article-list";
import LoadingArticles from "./Loading-articles";
import { getArticles } from "../../api-requests";

class AllArticles extends React.Component {
  state = {
    articles: null,
    loading: true,
    err: null
  };

  render() {
    const { articles, loading } = this.state;
    return (
      <div className="all-articles">
        {loading ? <LoadingArticles /> : <ArticlesList articles={articles} />}
      </div>
    );
  }

  componentDidMount() {
    getArticles()
      .then(allArticles => {
        this.setState({ loading: false, articles: allArticles });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default AllArticles;
