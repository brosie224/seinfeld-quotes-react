import React, { Component } from "react";
import SearchResults from "../components/SearchResults";

class SearchContainer extends Component {
  state = {
    query: "",
    quotes: [],
    results: [],
    searched: false
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
      ...this.state,
      results: content.filter(quote =>
        quote.toLowerCase().includes(this.state.query.toLowerCase())
      ),
      searched: true
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Search" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <br />
        <SearchResults
          results={this.state.results}
          searched={this.state.searched}
        />
      </>
    );
  }
}

export default SearchContainer;
