export const fetchQuotes = () => dispatch => {
  return fetch("http://localhost:3001/api/v1/quotes")
    .then(resp => resp.json())
    .then(quotes =>
      dispatch({ type: "FETCH_QUOTES_COMPLETED", payload: quotes })
    );
};
