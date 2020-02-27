import React from "react";
import NewArticle from "./New-article";
import ArticlesList from "./Article-list";
import LoadingArticles from "./Loading-articles";
// import Err from "../errors";
import { getArticles, postArticle, removeArticle } from "../../api-requests";
import SortDropdown from "./Sort-dropdown";

class AllArticles extends React.Component {
  state = {
    articles: null,
    loading: true,
    err: null,
    sort_by: null
  };

  render() {
    const { user, loggedIn } = this.props;
    const { articles, loading } = this.state;
    return (
      <div className="all-articles">
        {loggedIn ? (
          <NewArticle user={user} addArticle={this.addArticle} />
        ) : (
          <div>Please log in to add an article</div>
        )}
        {loading ? (
          <LoadingArticles />
        ) : (
          <ArticlesList
            articles={articles}
            deleteArticle={this.deleteArticle}
          />
        )}
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

  addArticle = newArticle => {
    console.log(newArticle);
    postArticle(newArticle)
      .then(newArticle => {
        this.setState(currentState => {
          return { articles: [newArticle, ...currentState.articles] };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteArticle = articleToDelete => {
    // const user = this.props.user;
    const { article_id, author } = articleToDelete;

    // if (user === author) {
    removeArticle(article_id);
    const articles = [...this.state.articles];
    const remainingArticles = articles.filter(article => {
      return article !== articleToDelete;
    });
    this.setState({ articles: remainingArticles });
    // } else {
    //   return <Err />;
    // }
  };
}

export default AllArticles;
