import React from "react";

const SearchResults = props => {
  if (props.results.length === 0 && props.searched === true) {
    return <p>No Results.</p>;
  }
  return (
    <div>
      {props.results.map(result => (
        <p key={result.id}>
          {result.content} ({result.character})
        </p>
      ))}
    </div>
  );
};

export default SearchResults;
