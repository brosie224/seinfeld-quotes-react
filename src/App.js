import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
// import Quotes from "./components/Quotes";
import NoMatch from "./components/NoMatch";
import QuotesContainer from "./containers/QuotesContainer";

function App() {
  return (
    <Router>
      <Nav />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quotes" component={QuotesContainer} />
          {/* <Route path="/quotes/:id" component={Quotes} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
