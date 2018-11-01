import React from "react";

import { connect } from "react-redux";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { number, shape, string } from "prop-types";

import { FormattedMessage } from "react-intl";

import GameScore from "./GameScore";
import GameBoard from "./GameBoard";

import GameScoreCompact from "./GameScoreCompact";
import GameBoardCompact from "./GameBoardCompact";

import { makeGetGameSet, makeGetGame } from "./gameSelectors";

const Game = ({ gameSet, game }) =>
  gameSet &&
  !gameSet.loading &&
  game && (
    <div>
      <Row>
        <Col xs={12}>
          <h1>
            <FormattedMessage
              id="game.header.prefix"
              description="Word game preceding game number"
              defaultMessage="Game"
            />{" "}
            <FormattedMessage
              id="global.numbersign"
              description="Number sign"
              defaultMessage="#"
            />
            {gameSet.gameSetId}-{game.letter}{" "}
            <small>
              ({gameSet.options.cards.major}x{gameSet.options.cards.minor})
            </small>
          </h1>
        </Col>
      </Row>

      {window.innerWidth < 1076
        ? [
            <Row>
              <Col xs={12}>
                <GameScoreCompact game={game} />
              </Col>
            </Row>,
            <Row>
              <Col xs={12}>
                <GameBoardCompact game={game} />
              </Col>
            </Row>
          ]
        : [
            <Row>
              <Col xs={12}>
                <GameScore game={game} />
              </Col>
            </Row>,
            <Row>
              <Col xs={12}>
                <GameBoard game={game} />
              </Col>
            </Row>
          ]}
    </div>
  );

Game.propTypes = {
  gameSet: shape({
    gameSetId: number.isRequired,
    options: shape({
      cards: shape({
        major: number.isRequired,
        minor: number.isRequired
      }).isRequired
    })
  }),
  game: shape({
    letter: string.isRequired
  })
};

Game.defaultProps = {
  gameSet: null,
  game: null
};

export default connect((state, props) => ({
  gameSet: makeGetGameSet()(state, props),
  game: makeGetGame()(state, props)
}))(Game);
