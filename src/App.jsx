import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Navigation from "./Navigation";
import Footer from "./Footer";

const App = () => (
  <Router>
    <Grid fluid>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Footer />
    </Grid>
  </Router>
);

export default App;
