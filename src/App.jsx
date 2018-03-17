import React from "react";
import { Grid } from "react-bootstrap";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import NewGame from "./NewGame/NewGame";
import Navigation from "./Navigation";
import Footer from "./Footer";
import PlayerProfile from "./PlayerProfile";
import MyGames from "./MyGames/MyGames";
import PlayersList from "./PlayersList/PlayersList";

import "./App.css";

const App = () => (
  <Grid fluid>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/new-game" component={NewGame} />
    <Route exact path="/new-game/:slug" component={NewGame} />
    <Route exact path="/my-games" component={MyGames} />
    <Route exact path="/players" component={PlayersList} />
    <Route exact path="/players/:name" component={PlayerProfile} />
    <Footer />
  </Grid>
);

export default App;
