import React from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

import { Button, Glyphicon, Row, Col } from "react-bootstrap";

const YourTurnActivity = props => (
  <tr>
    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
      <Glyphicon style={{ fontSize: "xx-large" }} glyph="log-in" />
    </td>
    <td>
      <Row>
        <Col xs={12} sm={6}>
          <b>{props.game.players.map(player => player.name).join(" vs. ")}</b>
          <p>
            Turn {props.game.round}.{props.game.turn}: Your turn
          </p>
        </Col>
        <Col xs={12} sm={6} className="activity-actions">
          <LinkContainer to={`/game/${props.game.id}`}>
            <Button bsStyle="primary">
              Make Your Move <Glyphicon glyph="log-in" />
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </td>
  </tr>
);

YourTurnActivity.propTypes = {
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

export default YourTurnActivity;
