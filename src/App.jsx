import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import { Route } from "react-router-dom";

import Home from "./Home/Home";
import NewGame from "./NewGame/NewGame";
import Navigation from "./Navigation";
import PlayerProfile from "./PlayerProfile/PlayerProfile";
import MyGames from "./MyGames/MyGames";
import Game from "./Game/Game";
import Archive from "./Archive/Archive";
import PlayersList from "./PlayersList/PlayersList";

import "./App.css";

const App = () => (
  <Grid fluid>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/new-game" component={NewGame} />
    <Route exact path="/new-game/:slug" component={NewGame} />
    <Route exact path="/game/:slug" component={Game} />
    <Route exact path="/my-games" component={MyGames} />
    <Route exact path="/archive" component={Archive} />
    <Route exact path="/players" component={PlayersList} />
    <Route exact path="/players/:name" component={PlayerProfile} />
  </Grid>
);

export default App;
