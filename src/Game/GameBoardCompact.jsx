import React from "react";

import Table from "react-bootstrap/lib/Table";

import range from "range-inclusive";

import GameTurnCompact from "./GameTurnCompact";
import CurrentTurnCompact from "./CurrentTurnCompact";
import EmptyTurnCompact from "./EmptyTurnCompact";

import GameBoardPropTypes from "./GameBoardPropTypes";

const GameBoardCompact = ({
  game,
  first,
  last,
  previousPrices,
  bank,
  onUpdateTurn
}) => (
  <Table style={{ textAlign: "center" }}>
    <tbody>
      {game.rounds
        .filter(round => round.round > 0)
        .map(round =>
          round.visibleTurns.map((turn, index) => (
            <GameTurnCompact
              firstEmptyRow={
                round.round === game.rounds.length - 1 && turn.turn === 1
              }
              lastRound={round.round === game.totalGameRounds}
              key={`turn_${round.round}_${turn.turn}`}
              turn={turn}
              turnIndex={index}
              turnsPerRound={game.options.playersNumber}
            />
          ))
        )}
      {!game.progress.complete && (
        <CurrentTurnCompact
          lastRound={game.progress.round === game.totalGameRounds}
          key={`turn_${game.progress.round}_${game.progress.turn}`}
          roundNumber={game.progress.round}
          turnIndex={game.progress.turn - 1}
          turnsPerRound={game.options.playersNumber}
          outstandingCards={
            game.result[game.progress.turn - 1].outstandingCards
          }
          first={first}
          last={last}
          previousPrices={previousPrices}
          bank={bank}
          onUpdateTurn={onUpdateTurn}
        />
      )}
      {game.progress.nextRound &&
        range(game.progress.nextRound, game.totalGameRounds).reduce(
          (cells, round) => {
            const turnLowerBound =
              round === game.progress.nextRound ? game.progress.nextTurn : 1;
            return cells.concat(
              range(turnLowerBound, game.options.playersNumber).map(turn => (
                <EmptyTurnCompact
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

GameBoardCompact.propTypes = GameBoardPropTypes;

export default GameBoardCompact;
