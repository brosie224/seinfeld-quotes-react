import React from "react";

const SearchResults = props => {
  return (
    <ul>
      {props.results.map(result => (
        <li>{result}</li>
      ))}
    </ul>
  );
};

// if results === 0

export default SearchResults;
