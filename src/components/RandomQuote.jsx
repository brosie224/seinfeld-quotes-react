import React from "react";

const RandomQuote = props => {
  const randomQuoteId = Math.floor(Math.random() * props.quotes.length + 1);

  const quotes = props.quotes.map(quote => (
    <li key={quote.id}>{quote.content}</li>
  ));

  const randomQuote = props.quotes.filter(quote => quote.id === randomQuoteId);

  return (
    <div>
      <h1>{randomQuoteId}</h1>
      <div>{quotes}</div>
    </div>
  );
};

export default RandomQuote;
