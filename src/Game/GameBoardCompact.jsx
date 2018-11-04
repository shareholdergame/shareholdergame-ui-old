import React from "react";

import Table from "react-bootstrap/lib/Table";

import { bool, number, arrayOf, shape, string } from "prop-types";

import GameTurnCompact from "./GameTurnCompact";
import CurrentTurnCompact from "./CurrentTurnCompact";

const GameBoardCompact = ({ game }) => (
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
          previousTurns={game.progress.previousTurns}
          lastRound={game.progress.round === game.totalGameRounds}
          key={`turn_${game.progress.round}_${game.progress.turn}`}
          roundNumber={game.progress.round}
          turnIndex={game.progress.turn - 1}
          turnsPerRound={game.options.playersNumber}
        />
      )}
    </tbody>
  </Table>
);

GameBoardCompact.propTypes = {
  game: shape({
    rounds: arrayOf(
      shape({
        name: string,
        userpic: string,
        winner: bool,
        wonmoney: number
      })
    ).isRequired
  }).isRequired
};

export default GameBoardCompact;
