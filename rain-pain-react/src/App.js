import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./josh/Navbar"
import { Button } from "reactstrap";
import Jumbrotron from './Shawn/Jumbotron'

function App() {
  return (
    <div className="App">
      <Example />
      <div></div>
      <Jumbrotron />
      <Button>test</Button>
    </div>
  );
}

export default App;
