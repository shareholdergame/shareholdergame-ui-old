import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Glyphicon, Button, Image, Well } from "react-bootstrap";
import { FormattedRelative, FormattedMessage } from "react-intl";
import { arrayOf, shape, number, string } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

const gameLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const GameTile = props => (
  <Well>
    <Row>
      <Col xs={12} style={{ marginBottom: "1em" }}>
        <span style={{ whiteSpace: "nowrap" }}>
          <FormattedMessage
            id="mygames.game.type"
            description="props.game type text on props.game tile"
            defaultMessage="{major} x {minor} - {total} turns"
            values={{
              major: props.game.options.major,
              minor: props.game.options.minor,
              total: props.game.options.major + props.game.options.minor
            }}
          />
        </span>
        <span className="pull-right">
          <span style={{ whiteSpace: "nowrap" }}>
            <FormattedMessage
              id="mygames.game.started"
              description="props.game started time text on props.game tile"
              defaultMessage="Started:"
            />
          </span>{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            <FormattedRelative value={new Date(props.game.started)} />
          </span>
        </span>
      </Col>
    </Row>

    <p style={{ fontSize: "x-large", textAlign: "center", margin: "1em 0" }}>
      {props.game.players
        .map(player => (
          <span key={player.id} style={{ whiteSpace: "nowrap" }}>
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
        ))
        .reduce((players, player) => {
          players.push(player);

          if (props.game.players.length > players.length) {
            players.push(
              <span key={`${player.id}_separator`}>
                <FormattedMessage
                  id="mygames.game.vs"
                  description="Versus separator between player names props.game tile"
                  defaultMessage=" - "
                />
              </span>
            );
          }

          return players;
        }, [])}
    </p>

    <p style={{ fontSize: "x-large", textAlign: "center" }}>
      <span style={{ marginRight: "2em" }}>
        Game {gameLetters[props.game.turn - 1]}
      </span>
      <span>
        <FormattedMessage
          id="mygames.gametile.turn"
          description="Turn number on game tile"
          defaultMessage="Move {round}.{turn}"
          values={{
            round: props.game.round,
            turn: props.game.turn
          }}
        />
      </span>{" "}
    </p>

    <div style={{ textAlign: "center" }}>
      <LinkContainer to={`/game/${props.game.id}`}>
        {props.game.players.findIndex(player => player.id === props.self.id) +
          1 ===
        props.game.turn ? (
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
