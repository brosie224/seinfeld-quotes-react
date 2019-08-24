import React from "react";
// import CharacterCards from "./CharacterCards";
import QuotesContainer from "../containers/QuotesContainer";

const Home = () => (
  <div>
    <h1 align="center">Hello... Newman</h1>
    <p className="center">
      Select your favorite character or hit the button for a random quote.
    </p>
    <br />
    <QuotesContainer />
    <br />
  </div>
);

export default Home;
