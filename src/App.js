import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SearchContainer from "./containers/SearchContainer";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Nav />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchContainer} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
