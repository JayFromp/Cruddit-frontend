import React from "react";
import ArticlesList from "./Article-list";
import LoadingArticles from "./Loading-articles";
import { getArticles } from "../../api-requests";
import SortDropdown from "./Sort-dropdown";

class AllArticles extends React.Component {
  state = {
    articles: null,
    loading: true,
    err: null,
    sort_by: null
  };

  render() {
    const { articles, loading } = this.state;
    return (
      <div className="all-articles">
        {loading ? <LoadingArticles /> : <ArticlesList articles={articles} />}
        <SortDropdown sort={this.sortArticles} />
      </div>
    );
  }

  componentDidMount() {
    const { topic_slug, author } = this.props;
    const { sort_by } = this.state;
    getArticles(sort_by, topic_slug, author)
      .then(allArticles => {
        this.setState({ loading: false, articles: allArticles });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    const { topic_slug } = this.props;
    const { sort_by } = this.state;
    if (topic_slug !== prevProps.topic_slug) {
      getArticles(sort_by, topic_slug)
        .then(allArticles => {
          this.setState({ articles: allArticles, loading: false });
        })
        .catch(err => {
          this.setState({ err });
        });
    }
  }

  sortArticles = event => {
    event.persist();

    const sortValue = event._targetInst.key;
    const { topic_slug } = this.props;
    getArticles(sortValue, topic_slug)
      .then(sortedArticles => {
        this.setState({ articles: sortedArticles, sort_by: sortValue });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default AllArticles;
