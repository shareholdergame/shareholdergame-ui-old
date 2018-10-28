import React from "react";

import Color from "color";

import Table from "react-bootstrap/lib/Table";

import { bool, number, arrayOf, shape, string } from "prop-types";

import GameTurn from "./GameTurn";

import Deck from "../Cards/Deck";

import { allColors } from "../Cards/CardColor";

const THICK_BORDER = "2px solid grey";

const GameBoard = ({ game }) => {
  const cardMap = game.report.players.reduce((cards, player) => {
    const newCards = cards;

    player.playerCards.forEach(cardData => {
      newCards[cardData.id] = Deck.get(cardData.cardId);
    });

    return newCards;
  }, {});

  // sorted rounds, including 0th round (e.g. initial state)
  const sortedRounds = game.report.rounds.sort((a, b) => a.round - b.round);

  const allTurns = sortedRounds.reduce((turns, round) => {
    const sortedTurns = round.turns.sort((a, b) => a.turn - b.turn);

    sortedTurns.forEach(turn => {
      turns.push(turn);
    });

    return turns;
  }, []);

  return (
    <div>
      <h2>Turns</h2>
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
                {color.columnLabel}
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
                {color.columnLabel}
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
                {color.columnLabel}
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
          {sortedRounds.filter(round => round.round > 0).map(round => {
            const sortedTurns = round.turns.sort((a, b) => a.turn - b.turn);
            const visibleTurns = sortedTurns.filter(turn => turn.turn > 0);

            return visibleTurns.map((turn, index) => {
              const previousTurns = allTurns.filter(
                otherTurn =>
                  (otherTurn.round === 0 && turn.round === 1) ||
                  (otherTurn.round === turn.round &&
                    otherTurn.turn < turn.turn) ||
                  (otherTurn.round === turn.round - 1 &&
                    otherTurn.turn >= turn.turn)
              );

              return (
                <GameTurn
                  cardMap={cardMap}
                  firstEmptyRow={
                    round.round === game.report.rounds.length - 1 &&
                    turn.turn === 1
                  }
                  lastRow={
                    round.round === game.report.rounds.length - 1 &&
                    turn.turn === visibleTurns.length
                  }
                  key={`turn_${round.round}_${turn.turn}`}
                  turn={turn}
                  previousTurns={previousTurns}
                  turnIndex={index}
                  roundsPerTurn={visibleTurns.length}
                />
              );
            });
          })}
        </tbody>
      </Table>

      <h2>Cards</h2>
      <Table bordered>
        <tbody>
          {game.report.players.map((player, index) => (
            <tr key={player.playerId}>
              <td>Player {index}</td>
              <td>
                {player.playerCards.map(cardData => (
                  <span key={cardData.id}>
                    {cardMap[cardData.id].cardLabel}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

GameBoard.propTypes = {
  game: shape({
    report: shape({
      players: arrayOf(
        shape({
          name: string,
          userpic: string,
          winner: bool,
          wonmoney: number
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export default GameBoard;
