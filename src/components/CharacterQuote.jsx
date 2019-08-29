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

  render() {
    const { quote } = this.props;
    return (
      <Container>
        {quote.content} <button onClick={this.handleUpVote}>+</button>{" "}
        {this.state.votes}
      </Container>
    );
  }
}

export default NewQuote;
