import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchQuotes,
  getRandomQuote,
  getCharacterQuote
} from "../redux/actions/quotesActions";
import CharacterCards from "../components/CharacterCards";
import RandomQuote from "../components/RandomQuote";
import CharacterQuote from "../components/CharacterQuote";

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
    this.props.getCharacterQuote(e.target.name);
  };

  render() {
    if (this.props.quotes.filtered.length < 2) {
      return (
        <div>
          <CharacterCards
            handleRandom={this.handleRandom}
            handleCharacter={this.handleCharacter}
          />
          <RandomQuote quotes={this.props.quotes} />
        </div>
      );
    }
    return (
      <div>
        <CharacterCards
          handleRandom={this.handleRandom}
          handleCharacter={this.handleCharacter}
        />
        {this.props.quotes.filtered.map(quote => (
          <ul className="many-quotes">
            <CharacterQuote key={quote.id} quote={quote} />
          </ul>
        ))}
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
