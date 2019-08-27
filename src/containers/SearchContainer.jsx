import React, { Component } from "react";
import SearchResults from "../components/SearchResults";

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

  handleSubmit = e => {
    e.preventDefault();
    const content = this.state.quotes.map(quote => quote.content);

    this.setState({
      results: content.filter(quote => quote.includes(this.state.query))
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Search" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        {/* <SearchResults results={this.state.results} /> */}
        Query: {this.state.query}
        <br />
        Results:{" "}
        {this.state.results.map(result => (
          <li>{result}</li>
        ))}
      </>
    );
  }
}

export default SearchContainer;
