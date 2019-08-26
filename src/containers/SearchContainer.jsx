import React, { Component } from "react";

class SearchContainer extends Component {
  state = {
    query: "",
    quotes: [],
    results: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/quotes")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          quotes: data
        });
      });
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Search" onChange={this.handleChange} />
        <button type="submit">Search</button>
        {this.state.query}
        {this.state.quotes.map(quote => (
          <h3>{quote.character}</h3>
        ))}
      </form>
    );
  }
}

export default SearchContainer;
