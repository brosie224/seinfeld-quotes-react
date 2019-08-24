export const fetchQuotes = () => dispatch => {
  return fetch("http://localhost:3001/api/v1/quotes")
    .then(resp => resp.json())
    .then(quotes =>
      dispatch({ type: "FETCH_QUOTES_COMPLETED", payload: quotes })
    );
};

export const getRandomQuote = quoteId => {
  return {
    type: "RANDOM_QUOTE",
    payload: quoteId
  };
};

export const getCharacterQuote = character => {
  return {
    type: "CHARACTER_QUOTE",
    payload: character
  };
};
