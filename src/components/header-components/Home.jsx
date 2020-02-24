import React from "react";
import { Link } from "@reach/router";

const Home = props => {
  return (
    <div className="home-link">
      <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
        Cruddit
      </Link>
    </div>
  );
};

export default Home;
