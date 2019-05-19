import React from "react";
import "./App.css";
import { Switch, Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { Home } from "./james/home/home"

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
