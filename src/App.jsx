import React from "react";
import { Grid } from "react-bootstrap";
import { Route } from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./App.css";

const App = () => (
  <Grid fluid>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Footer />
  </Grid>
);

export default App;
