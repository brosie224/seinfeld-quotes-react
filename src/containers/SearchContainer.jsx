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
    this.setState({
      ...this.state,
      results: this.state.quotes.filter(quote =>
        quote.content
          .toLowerCase()
          .includes(this.state.query.toLocaleLowerCase())
      ),
      searched: true
    });
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Search" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <br />
        <SearchResults
          results={this.state.results}
          searched={this.state.searched}
        />
      </div>
    );
  }
}

export default SearchContainer;
