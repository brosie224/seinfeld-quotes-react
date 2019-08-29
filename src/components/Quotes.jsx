import React from "react";
import Container from "react-bootstrap/Container";

const Quotes = props => {
  return (
    <div>
      <Container>
        <ul className="many-quotes">
          {props.quotes.filtered.map(quote => (
            <li key={quote.id}>
              {quote.content}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Quotes;
