import React from "react";

const RandomQuote = props => {
  return props.quotes.filtered.map(quote => (
    <div key={quote.id} className="one-quote">
      {quote.content} ({quote.character})
    </div>
  ));
};

export default RandomQuote;
