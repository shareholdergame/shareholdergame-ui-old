import React from "react";
import { Link } from "react-router-dom";

import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Button from "react-bootstrap/lib/Button";
import Image from "react-bootstrap/lib/Image";
import Well from "react-bootstrap/lib/Well";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { FormattedRelative, FormattedMessage } from "react-intl";
import { arrayOf, shape, number, string } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

const gameLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const GameTile = ({ game, self }) => (
  <Well>
    <Row>
      <Col xs={12} style={{ marginBottom: "1em" }}>
        <span style={{ whiteSpace: "nowrap" }}>
          <FormattedMessage
            id="mygames.game.type"
            description="game type text on game tile"
            defaultMessage="{major} x {minor} - {total} turns"
            values={{
              major: game.options.major,
              minor: game.options.minor,
              total: game.options.major + game.options.minor
            }}
          />
        </span>
        <span className="pull-right">
          <span style={{ whiteSpace: "nowrap" }} className="hidden-xs">
            <FormattedMessage
              id="mygames.game.started"
              description="game started time text on game tile"
              defaultMessage="Started:"
            />
          </span>{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            <FormattedRelative value={new Date(game.started)} />
          </span>
        </span>
      </Col>
    </Row>

    <p style={{ fontSize: "large", textAlign: "center", margin: "1em 0" }}>
      {game.players
        .map(player => ({
          player,
          component: (
            <span
              key={player.id}
              style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            >
              <Link to={`/players/${player.name}`}>
                <Image
                  src={`/images/userpics/${player.userpic}`}
                  width="38"
                  height="38"
                  circle
                />
              </Link>{" "}
              <Link to={`/players/${player.name}`}>{player.name}</Link>
            </span>
          )
        }))
        .reduce((players, player) => {
          players.push(player.component);

          if (game.players.length * 2 - 1 > players.length) {
            players.push(
              <span key={`${player.player.id}_separator`}>
                <FormattedMessage
                  id="global.vs"
                  description="Versus separator between player names"
                  defaultMessage=" vs. "
                />
              </span>
            );
          }

          return players;
        }, [])}
    </p>

    <p style={{ fontSize: "large", textAlign: "center" }}>
      <span style={{ marginRight: "2em" }}>
        Game {gameLetters[game.turn - 1]}
      </span>
      <span>
        <FormattedMessage
          id="mygames.gametile.turn"
          description="Turn number on game tile"
          defaultMessage="Move {round}.{turn}"
          values={{
            round: game.round,
            turn: game.turn
          }}
        />
      </span>{" "}
    </p>

    <div style={{ textAlign: "center" }}>
      <LinkContainer to={`/game/${game.id}/${game.gameLetter}`}>
        {game.players.findIndex(player => player.id === self.id) + 1 ===
        game.turn ? (
          <Button bsStyle="success" bsSize="large">
            <FormattedMessage
              id="global.yourturn.button"
              description="Button label text for your turn call to action"
              defaultMessage="Make Your Move"
            />{" "}
            <Glyphicon glyph="log-in" />
          </Button>
        ) : (
          <Button bsSize="large">
            <Glyphicon glyph="eye-open" />{" "}
            <FormattedMessage
              id="global.viewgame.button"
              description="View game button label"
              defaultMessage="View Game"
            />
          </Button>
        )}
      </LinkContainer>
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
  }).isRequired,
  self: shape({
    id: number.isRequired
  }).isRequired
};

export default GameTile;
