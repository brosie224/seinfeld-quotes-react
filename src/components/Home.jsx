import React from "react";
import QuotesContainer from "../containers/QuotesContainer";

const Home = () => (
  <div>
    <h1 align="center">Hello... Newman</h1>
    <p className="center">
      Select your favorite character for their quotes or hit the button for a
      random one.
    </p>
    <br />
    <QuotesContainer />
    <br />
  </div>
);

export default Home;
