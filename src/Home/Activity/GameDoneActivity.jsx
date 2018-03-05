import React from "react";
import { Button, Glyphicon, Row, Col } from "react-bootstrap";
import { arrayOf, number, shape, string, bool } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

const GameDoneActivity = props => (
  <tr>
    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
      <Glyphicon
        style={{ fontSize: "xx-large", color: props.winner ? "green" : "red" }}
        glyph={props.winner ? "ok-circle" : "remove-circle"}
      />
    </td>
    <td>
      <Row>
        <Col xs={12} sm={6}>
          <b>{props.game.players.map(player => player.name).join(" vs. ")}</b>
          <p>
            Game is over.{" "}
            {props.winner ? "Congratulations, you won!" : "You lost."}
          </p>
        </Col>
        <Col xs={12} sm={6} className="activity-actions">
          <LinkContainer to={`/game/${props.game.id}`}>
            <Button>
              <Glyphicon glyph="eye-open" /> View Game
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </td>
  </tr>
);

GameDoneActivity.propTypes = {
  winner: bool.isRequired,
  game: shape({
    id: number.isRequired,
    players: arrayOf(
      shape({
        name: string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default GameDoneActivity;
