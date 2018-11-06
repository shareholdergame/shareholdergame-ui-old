import React from "react";

import Color from "color";

import Table from "react-bootstrap/lib/Table";

import { bool, number, arrayOf, shape, string } from "prop-types";

import range from "range-inclusive";

import { injectIntl, intlShape } from "react-intl";

import GameTurn from "./GameTurn";
import CurrentTurn from "./CurrentTurn";
import EmptyTurn from "./EmptyTurn";

import { allColors } from "../Cards/CardColor";

const THICK_BORDER = "2px solid grey";

const GameBoard = ({ game, intl }) => (
  <Table bordered style={{ textAlign: "center" }}>
    <thead>
      <tr>
        <th style={{ borderBottom: THICK_BORDER }} />
        {allColors.map(color => (
          <th
            key={color.style}
            style={{
              border: THICK_BORDER,
              backgroundColor: Color(color.style).alpha(0.2),
              padding: "0.5em",
              textAlign: "center"
            }}
          >
            {intl.formatMessage(color.columnLabel)}
          </th>
        ))}
        <th
          style={{
            borderBottom: THICK_BORDER
          }}
        />
        {allColors.map(color => (
          <th
            key={color.style}
            style={{
              border: THICK_BORDER,
              backgroundColor: Color(color.style).alpha(0.2),
              padding: "0.5em",
              textAlign: "center"
            }}
          >
            {intl.formatMessage(color.columnLabel)}
          </th>
        ))}
        {allColors.map(color => (
          <th
            key={color.style}
            style={{
              border: THICK_BORDER,
              backgroundColor: Color(color.style).alpha(0.2),
              padding: "0.5em",
              textAlign: "center"
            }}
          >
            {intl.formatMessage(color.columnLabel)}
          </th>
        ))}
        <th
          style={{
            borderBottom: THICK_BORDER
          }}
        />
      </tr>
    </thead>
    <tbody>
      {game.rounds
        .filter(round => round.round > 0)
        .map(round =>
          round.visibleTurns.map((turn, index) => (
            <GameTurn
              turn={turn}
              firstEmptyRow={
                round.round === game.rounds.length - 1 && turn.turn === 1
              }
              lastRow={
                round.round === game.totalGameRounds &&
                turn.turn === round.visibleTurns.length
              }
              key={`turn_${round.round}_${turn.turn}`}
              turnIndex={index}
              turnsPerRound={game.options.playersNumber}
            />
          ))
        )}
      {!game.progress.complete && (
        <CurrentTurn
          previousTurns={game.progress.previousTurns}
          lastRow={game.progress.round === game.totalGameRounds}
          key={`turn_${game.progress.round}_${game.progress.turn}`}
          roundNumber={game.progress.round}
          turnIndex={game.progress.turn - 1}
          turnsPerRound={game.options.playersNumber}
          outstandingCards={
            game.result[game.progress.turn - 1].outstandingCards
          }
        />
      )}
      {game.progress.nextRound &&
        range(game.progress.nextRound, game.totalGameRounds).reduce(
          (cells, round) => {
            const turnLowerBound =
              round === game.progress.nextRound ? game.progress.nextTurn : 1;
            return cells.concat(
              range(turnLowerBound, game.options.playersNumber).map(turn => (
                <EmptyTurn
                  lastRow={round === game.totalGameRounds}
                  firstEmptyRow={round === game.totalGameRounds && turn === 1}
                  key={`turn_${round}_${turn}`}
                  turnsPerRound={game.options.playersNumber}
                  roundNumber={round}
                  turnIndex={turn - 1}
                />
              ))
            );
          },
          []
        )}
    </tbody>
  </Table>
);

GameBoard.propTypes = {
  game: shape({
    rounds: arrayOf(
      shape({
        name: string,
        userpic: string,
        winner: bool,
        wonmoney: number
      })
    ).isRequired
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(GameBoard);
