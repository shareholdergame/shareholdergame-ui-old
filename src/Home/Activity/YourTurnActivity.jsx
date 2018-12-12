import React from "react";
import { arrayOf, number, shape, string } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { FormattedMessage } from "react-intl";

const YourTurnActivity = props => {
  const gameURL = `/game/${props.game.id}/${props.game.gameLetter}`;

  return (
    <tr>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <Glyphicon style={{ fontSize: "xx-large" }} glyph="log-in" />
      </td>
      <td>
        <Row>
          <Col xs={12} sm={6}>
            <div>
              <b>
                {props.game.players.reduce((players, player) => {
                  players.push(
                    <Link key={player.id} to={`/players/${player.name}`}>
                      {player.name}
                    </Link>
                  );

                  if (props.game.players.length * 2 - 1 > players.length) {
                    players.push(
                      <span key={`${player.id}_separator`}>
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
              </b>
            </div>
            <div>
              <FormattedMessage
                id="home.activity.yourturn.label"
                description="Turn label text for your turn activity"
                defaultMessage="Turn {round}.{turn}: Your turn"
                values={{
                  round: props.game.round,
                  turn: props.game.turn
                }}
              />
            </div>
            <div>
              <small>
                <Link to={gameURL}>
                  #{props.game.id}-{props.game.gameLetter}
                </Link>
              </small>
            </div>
          </Col>
          <Col xs={12} sm={6} className="activity-actions">
            <LinkContainer to={gameURL}>
              <Button bsStyle="primary">
                <FormattedMessage
                  id="global.yourturn.button"
                  description="Button label text for your turn call to action"
                  defaultMessage="Make Your Move"
                />{" "}
                <Glyphicon glyph="log-in" />
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </td>
    </tr>
  );
};

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
