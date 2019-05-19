import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./josh/Navbar";
import { Button } from "reactstrap";
import Jumbrotron from "./Shawn/Jumbotron";
import { PageSection } from "./james/pageSection/pageSection";

function App() {
  return (
    <div className="App">
      <Example />
      <div></div>
      <Jumbrotron />
      <PageSection/>
    </div>
  );
}

export default App;
