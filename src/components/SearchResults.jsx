import React from "react";
import SeinfeldPic from "../images/seinfeldBackground.jpg";

const SearchResults = props => {
  if (props.searched === "less") {
    return <p>Please enter at least 3 characters.</p>;
  }
  if (props.results.length === 0 && props.searched === true) {
    return <p>No Results.</p>;
  }
  return (
    <div>
      <div className="rel">
        {props.results.map(result => (
          <p key={result.id}>
            {result.content} ({result.character})
          </p>
        ))}
      </div>
      <img className="search-img" src={SeinfeldPic} alt="Seinfeld" />
    </div>
  );
};

export default SearchResults;
