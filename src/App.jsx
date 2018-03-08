import React from "react";
import { Grid } from "react-bootstrap";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import NewGame from "./NewGame";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./App.css";

const App = () => (
  <Grid fluid>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/new-game/" component={NewGame} />
    <Footer />
  </Grid>
);

export default App;
