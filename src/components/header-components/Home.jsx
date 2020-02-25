import React from "react";
import { Link } from "@reach/router";

const Home = props => {
  return (
    <a className="home-link">
      <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
        Cruddit
      </Link>
    </a>
  );
};

export default Home;
