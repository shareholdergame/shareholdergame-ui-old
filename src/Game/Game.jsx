import React from "react";

import { connect } from "react-redux";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { number, shape } from "prop-types";

import { FormattedMessage } from "react-intl";

import GameScore from "./GameScore";
import GameBoard from "./GameBoard";

const Game = ({ gameSet, game }) =>
  gameSet && (
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
            {gameSet.gameSetId}-
            {game.letter}{" "}
            <small>
              ({gameSet.options.cards.major}x{gameSet.options.cards.minor})
            </small>
          </h1>
        </Col>
      </Row>

      <h2>Score</h2>
      <Row>
        <Col xs={12}>
          <GameScore gameSet={gameSet} game={game} />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <GameBoard game={game} />
        </Col>
      </Row>
    </div>
  );

Game.propTypes = {
  gameSet: shape({
    id: number
  })
};

Game.defaultProps = {
  gameSet: null
};

export default connect((state, ownProps) => {
  const gameSet = state.games.sets.find(
    set => `${set.gameSetId}` === ownProps.match.params.setSlug
  );

  if (!gameSet || gameSet.loading) {
    return {};
  }

  const game = gameSet.games.find(
    gameInSet => gameInSet.letter === ownProps.match.params.gameLetter
  );

  return { gameSet, game };
})(Game);
