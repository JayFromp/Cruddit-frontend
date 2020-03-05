import React from "react";
import Err from "../errors";
import RenderArticle from "./Render-article";
import Comments from "../comment-components/Comments";
import { getArticle } from "../../api-requests";

class SingleArticle extends React.Component {
  state = {
    article: [],
    err: null,
    loading: true
  };

  render() {
    const { loading, err, article } = this.state;
    const { user, loggedIn } = this.props;
    if (err) {
      return <Err />;
    }
    if (loading) {
      return <p>loading article...</p>;
    } else
      return (
        <div>
          <RenderArticle article={article} />
          <Comments article={article} user={user} loggedIn={loggedIn} />
        </div>
      );
  }
  componentDidMount() {
    const articleId = this.props.article_id;

    getArticle(articleId)
      .then(newArticle => {
        this.setState({
          article: newArticle,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default SingleArticle;
