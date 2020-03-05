import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingArticles = () => {
  return (
    <section>
      <Spinner
        className="loading"
        animation="grow"
        style={{ color: "black" }}
      />
      <h1 className="loading">loading articles</h1>
    </section>
  );
};

export default LoadingArticles;
