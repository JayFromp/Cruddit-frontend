import React from "react";
import { Link } from "@reach/router";

const Home = props => {
  return (
    <Link className="home-link" to="/" style={{ textDecoration: "none" }}>
      Cruddit
    </Link>
  );
};

export default Home;
