import React from "react";
import NewArticle from "./New-article";
import ArticlesList from "./Article-list";
import LoadingArticles from "./Loading-articles";
import TopicCard from "../article-components/Topic-card";
import UserCard from "./User-card";
import Err from "../errors";
import { getArticles, postArticle, removeArticle } from "../../api-requests";
import SortDropdown from "./Sort-dropdown";

class AllArticles extends React.Component {
  state = {
    articles: null,
    loading: true,
    error: null,
    sort_by: null
  };

  render() {
    const { user, loggedIn, topic_slug, author } = this.props;
    const { articles, loading, error } = this.state;
    if (error) return <Err />;
    return (
      <div className="all-articles">
        {author && <UserCard />}
        {topic_slug && <TopicCard />}
        {loggedIn ? (
          <NewArticle
            user={user}
            addArticle={this.addArticle}
            topic={topic_slug}
          />
        ) : (
          <p className="please-login">Please log in to add an article & vote</p>
        )}
        <SortDropdown sort={this.sortArticles} />
        {loading ? (
          <LoadingArticles />
        ) : (
          <ArticlesList
            articles={articles}
            deleteArticle={this.deleteArticle}
            user={user}
            loggedIn={loggedIn}
          />
        )}
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
        this.setState({ error: err });
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
          this.setState({ error: err });
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
        this.setState({ error: err });
      });
  };

  deleteArticle = articleToDelete => {
    const { article_id } = articleToDelete;

    removeArticle(article_id)
      .then(() => {
        const articles = [...this.state.articles];
        const remainingArticles = articles.filter(article => {
          return article !== articleToDelete;
        });
        this.setState({ articles: remainingArticles });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
}

export default AllArticles;
