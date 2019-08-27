import React from "react";

const SearchResults = props => {
  if (props.results.length === 0 && props.searched === true) {
    return <p>No Results.</p>;
  }
  return (
    <ul>
      {props.results.map((result, i) => (
        <li key={i}>{result}</li>
      ))}
    </ul>
  );
};

// if results === 0

export default SearchResults;
