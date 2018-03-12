import React from "react";
import { Grid } from "react-bootstrap";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import NewGame from "./NewGame/NewGame";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MyGames from "./MyGames";

import "./App.css";

const App = () => (
  <Grid fluid>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/new-game/" component={NewGame} />
    <Route exact path="/my-games/" component={MyGames} />
    <Route exact path="/new-game/:slug/" component={NewGame} />
    <Footer />
  </Grid>
);

export default App;
