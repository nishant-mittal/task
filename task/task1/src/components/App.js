import React from "react";
import Register from "./Register";
import Update from "./Update";
import SignIn from "./SignIn";
import Home from "./Home";
import DataDisplay from "./DataDisplay";
import { Router, Route } from "react-router-dom";
import history from "../history";
import "./App.css";

function App() {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/data" component={DataDisplay} />
        <Route path="/update/:id" component={Update} />
      </div>
    </Router>
  );
}

export default App;
