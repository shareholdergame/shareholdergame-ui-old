import React from "react";

import { connect } from "react-redux";

import Media from "react-media";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { bool, shape, string } from "prop-types";

import { FormattedMessage } from "react-intl";

import GameScore from "./GameScore";
import GameBoard from "./GameBoard";

import GameScoreCompact from "./GameScoreCompact";
import GameBoardCompact from "./GameBoardCompact";

import { makeGetGame } from "./gameSelectors";

const Game = ({ game }) =>
  !game.loading && (
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
            {game.gameSetId}-{game.letter}{" "}
            <small>
              ({game.options.cards.major}x{game.options.cards.minor})
            </small>
          </h1>
        </Col>
      </Row>

      <Media query="(max-width: 1076px)">
        {matches =>
          matches
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
              ]
        }
      </Media>
    </div>
  );

Game.propTypes = {
  game: shape({
    loading: bool.isRequired,
    letter: string.isRequired
  }).isRequired
};

Game.defaultProps = {
  game: null
};

export default connect((state, props) => ({
  game: makeGetGame()(state, props)
}))(Game);
