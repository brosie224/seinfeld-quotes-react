import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchQuotes } from "../redux/actions/quotesActions";
import RandomQuote from "../components/RandomQuote";

class QuotesContainer extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return <RandomQuote quotes={this.props.quotes} />;
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes
});

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(QuotesContainer);
