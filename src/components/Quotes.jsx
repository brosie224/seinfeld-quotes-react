import React from "react";
import Jerry from "../images/Jerry.jpg";
import George from "../images/George.jpg";
import Elaine from "../images/Elaine.jpg";
import Kramer from "../images/Kramer.jpg";

const Quotes = props => {
  const charImgs = {
    Jerry: <img src={Jerry} height="300" alt="logo" />,
    George: <img src={George} height="300" alt="logo" />,
    Elaine: <img src={Elaine} height="300" alt="logo" />,
    Kramer: <img src={Kramer} height="300" alt="logo" />
  };

  //   const charImg = charImgs[props.quotes.filtered[0].character];

  // Change image and headers to card?
  return (
    <div>
      <br />
      {/* <h1 className="indent-head">{props.quotes.filtered[0].character}</h1>
      {charImgs[props.quotes.filtered[0].character]}
      <br />
      <br /> */}
      <ul className="many-quotes">
        {props.quotes.filtered.map(quote => (
          <li key={quote.id}>
            {quote.content}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
