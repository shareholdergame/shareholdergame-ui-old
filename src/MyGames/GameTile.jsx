import React from "react";
import { Link } from "react-router-dom";
import { Image, Well } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { arrayOf, shape, number, string } from "prop-types";

const gameLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const GameTile = props => (
  <Well>
    <span className="pull-right">
      <FormattedMessage
        id="myprops.games.game.started"
        description="props.game started time text on props.game tile"
        defaultMessage="Started: {started}"
        values={{
          started: props.game.started
        }}
      />
    </span>
    <FormattedMessage
      id="myprops.games.game.type"
      description="props.game type text on props.game tile"
      defaultMessage="{major} x {minor} - {total} turns"
      values={{
        major: props.game.options.major,
        minor: props.game.options.minor,
        total: props.game.options.major + props.game.options.minor
      }}
    />

    <div>
      {props.game.players
        .map(player => (
          <span>
            <Link to={`/players/${player.name}`}>
              <Image
                src={`/images/userpics/${player.userpic}`}
                width="16"
                height="16"
                circle
              />
            </Link>{" "}
            <Link to={`/players/${player.name}`}>{player.name}</Link>
          </span>
        ))
        .reduce((players, player) => {
          players.push(player);

          if (props.game.players.length > players.length) {
            players.push(
              <FormattedMessage
                id="myprops.games.game.vs"
                description="Versus separator between player names props.game tile"
                defaultMessage=" - "
              />
            );
          }

          return players;
        }, [])}
    </div>

    <div>
      <span>Game {gameLetters[props.game.turn]}</span>{" "}
      <span>
        Move {props.game.round}.{props.game.turn}
      </span>{" "}
      <span>
        Move {props.game.round}.{props.game.turn}
      </span>
    </div>
  </Well>
);

GameTile.propTypes = {
  game: shape({
    id: number.isRequired,
    round: number.isRequired,
    turn: number.isRequired,
    players: arrayOf(
      shape({
        name: string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default GameTile;
