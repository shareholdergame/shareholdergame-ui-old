import React from "react";

import { connect } from "react-redux";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Table from "react-bootstrap/lib/Table";

import { bool, number, arrayOf, shape, string } from "prop-types";

import { FormattedMessage } from "react-intl";

const Game = props =>
  props.game && (
    <div>
      <Row>
        <Col xs="12">
          <h1>
            <FormattedMessage
              id="game.header.prefix"
              description="Word game preceding game number"
              defaultMessage="Game"
            />{" "}
            <small>
              <FormattedMessage
                id="global.numbersign"
                description="Number sign"
                defaultMessage="#"
              />
              {props.game.id}
            </small>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Table bordered>
            <tbody>
              {props.game.players.map((player, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{player.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );

Game.propTypes = {
  game: shape({
    players: arrayOf(
      shape({
        name: string,
        userpic: string,
        winner: bool,
        wonmoney: number
      })
    ).isRequired
  })
};

Game.defaultProps = {
  game: null
};

export default connect((state, ownProps) => {
  if (
    state.games.loading_archive ||
    !state.games.game_archive ||
    !state.games.game_archive
  ) {
    return null;
  }

  return {
    game: state.games.game_archive.find(
      game => `${game.id}` === ownProps.match.params.slug
    )
  };
})(Game);
