import React from "react";

class Votes extends React.Component {
  state = {
    noOfVotes: 0
  };
  render() {
    return <div>{this.state.noOfVotes}</div>;
  }
  componentDidMount() {
    getVotes().then(votes => {
      this.setState({ noOfVotes: votes });
    });
  }
}

export default Votes;
