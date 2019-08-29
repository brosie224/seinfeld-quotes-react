import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class NewQuote extends Component {
  state = {
    votes: 0
  };

  handleUpVote = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  handleDownVote = () => {
    if (this.state.votes > 0) {
      this.setState({
        votes: this.state.votes - 1
      });
    }
  };

  render() {
    const { quote } = this.props;
    return (
      <Container>
        {quote.content}{" "}
        <button className="vote" onClick={this.handleUpVote}>
          +
        </button>{" "}
        <button className="vote" onClick={this.handleDownVote}>
          -
        </button>{" "}
        {this.state.votes}
      </Container>
    );
  }
}

export default NewQuote;
