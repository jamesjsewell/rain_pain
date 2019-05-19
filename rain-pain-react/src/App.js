import React from "react";
import "./App.css";
import { Switch, Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { Home } from "./james/home/home";

const history = createBrowserHistory();

function App() {
  return (
    <Home />
  );
}

export default App;
