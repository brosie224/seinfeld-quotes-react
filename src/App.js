import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import RandomQuote from "./components/RandomQuote";
import NoMatch from "./components/NoMatch";
import QuotesContainer from "./containers/QuotesContainer";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/random-quote" component={RandomQuote} />
        <Route exact path="/quotes" component={QuotesContainer} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
