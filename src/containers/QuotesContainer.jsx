import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchQuotes,
  getRandomQuote,
  getCharacterQuote
} from "../redux/actions/quotesActions";
import CharacterCards from "../components/CharacterCards";
import Quotes from "../components/Quotes";
import SingleQuote from "../components/SingleQuote";

class QuotesContainer extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  handleRandom = e => {
    e.preventDefault();
    const randomQuoteId = Math.floor(
      Math.random() * this.props.quotes.all.length + 1
    );
    this.props.getRandomQuote(randomQuoteId);
  };

  handleCharacter = e => {
    e.preventDefault();
    // this.props.getCharacterQuote(e.target.textContent);
    this.props.getCharacterQuote(e.target.name);
  };

  render() {
    if (this.props.quotes.filtered.length === 0) {
      return (
        <div>
          <CharacterCards
            handleRandom={this.handleRandom}
            handleCharacter={this.handleCharacter}
          />
        </div>
      );
    }
    if (this.props.quotes.filtered.length === 1) {
      return (
        <div>
          <CharacterCards
            handleRandom={this.handleRandom}
            handleCharacter={this.handleCharacter}
          />
          <SingleQuote quotes={this.props.quotes} />
        </div>
      );
    }
    return (
      <div>
        <CharacterCards
          handleRandom={this.handleRandom}
          handleCharacter={this.handleCharacter}
        />
        <Quotes quotes={this.props.quotes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes
});

export default connect(
  mapStateToProps,
  { fetchQuotes, getRandomQuote, getCharacterQuote }
)(QuotesContainer);
