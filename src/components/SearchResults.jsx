import React from "react";

const SearchResults = props => {
  if (props.searched === "less") {
    return (
      <p>
        <i>Please enter at least 3 characters.</i>
      </p>
    );
  }
  if (props.results.length === 0 && props.searched === true) {
    return (
      <p>
        <i>No Results.</i>
      </p>
    );
  }
  return (
    <div className="many-quotes">
      {props.results.map(result => (
        <p key={result.id}>
          {result.content} ({result.character})
        </p>
      ))}
    </div>
  );
};

export default SearchResults;
