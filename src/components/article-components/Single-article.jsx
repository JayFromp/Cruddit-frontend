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
    if (err) {
      return <Err />;
    }
    if (loading) {
      return <p>loading article...</p>;
    } else
      return (
        <div className="single-article">
          <RenderArticle article={article} />
          <Comments article={article} />
        </div>
      );
  }
  componentDidMount() {
    const articleId = this.props.article_id;
    console.log("api call", articleId, "<<<<<");
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
