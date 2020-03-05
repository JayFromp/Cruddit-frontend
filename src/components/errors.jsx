import React from "react";

const Err = ({ error }) => {
  console.log("error", error);
  return (
    <section className="error">
      <h1>{error.response.status} That page doesn't exist. Sorry. </h1>
      <p>
        <img
          src="https://i.ytimg.com/vi/st6-DgWeuos/hqdefault.jpg"
          alt="King Size Homer"
        />
      </p>
    </section>
  );
};

export default Err;
