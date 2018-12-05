import React from "react";

import { connect } from "react-redux";

import Media from "react-media";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { bool, number, shape, string } from "prop-types";

import { FormattedMessage } from "react-intl";

import GameScore from "./GameScore";
import GameBoard from "./GameBoard";

import GameScoreCompact from "./GameScoreCompact";
import GameBoardCompact from "./GameBoardCompact";

import { getGame } from "./gameSelectors";

import CurrentTurnState from "./CurrentTurnState";

const Game = ({ game, self }) => {
  if (game.error) {
    return <div>{game.error.message}</div>;
  }

  if (game.loading) {
    return <div>Loading...</div>;
  }

  const score = (
    <Media query="(max-width: 1076px)">
      {matches =>
        matches ? (
          <Row>
            <Col xs={12}>
              <GameScoreCompact game={game} self={self} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12}>
              <GameScore game={game} self={self} />
            </Col>
          </Row>
        )
      }
    </Media>
  );
  let board;

  if (game.progress.complete) {
    board = (
      <Media query="(max-width: 1076px)">
        {matches =>
          matches ? (
            <Row>
              <Col xs={12}>
                <GameBoardCompact game={game} />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col xs={12}>
                <GameBoard game={game} />
              </Col>
            </Row>
          )
        }
      </Media>
    );
  } else {
    board = (
      <CurrentTurnState previousTurns={game.progress.previousTurns}>
        {({
          first,
          selectedCard,
          previousPrices,
          priceOperations,
          newPrices,
          areAllPricesUpdated,
          last,
          bank,
          onUpdateStockAmount,
          onUpdateCard
        }) => (
          <Media query="(max-width: 1076px)">
            {matches =>
              matches ? (
                <Row>
                  <Col xs={12}>
                    <GameBoardCompact
                      game={game}
                      first={first}
                      selectedCard={selectedCard}
                      previousPrices={previousPrices}
                      priceOperations={priceOperations}
                      newPrices={newPrices}
                      areAllPricesUpdated={areAllPricesUpdated}
                      last={last}
                      bank={bank}
                      onUpdateStockAmount={onUpdateStockAmount}
                      onUpdateCard={onUpdateCard}
                    />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs={12}>
                    <GameBoard
                      game={game}
                      first={first}
                      selectedCard={selectedCard}
                      previousPrices={previousPrices}
                      priceOperations={priceOperations}
                      newPrices={newPrices}
                      areAllPricesUpdated={areAllPricesUpdated}
                      last={last}
                      bank={bank}
                      onUpdateStockAmount={onUpdateStockAmount}
                      onUpdateCard={onUpdateCard}
                    />
                  </Col>
                </Row>
              )
            }
          </Media>
        )}
      </CurrentTurnState>
    );
  }

  return (
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
            {game.gameSetId}-{game.gameLetter}{" "}
            <small>
              ({game.options.cards.major}x{game.options.cards.minor})
            </small>
          </h1>
        </Col>
      </Row>
      {score}
      {board}
    </div>
  );
};

Game.propTypes = {
  game: shape({
    loading: bool.isRequired,
    gameLetter: string.isRequired
  }).isRequired,
  self: shape({
    id: number
  })
};

Game.defaultProps = {
  self: null
};

export default connect((state, props) => ({
  game: getGame(state, props),
  self: state.self.self
}))(Game);
