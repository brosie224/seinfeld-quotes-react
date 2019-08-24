import React from "react";

const SingleQuote = props => {
  return props.quotes.filtered.map(quote => (
    <div key={quote.id} className="one-quote">
      <br />
      {quote.content} ({quote.character})
    </div>
  ));
};

export default SingleQuote;
