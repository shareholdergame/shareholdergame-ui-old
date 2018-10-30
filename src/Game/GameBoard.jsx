import React from "react";

import Color from "color";

import Table from "react-bootstrap/lib/Table";

import { bool, number, arrayOf, shape, string } from "prop-types";

import GameTurn from "./GameTurn";

import { allColors } from "../Cards/CardColor";

const THICK_BORDER = "2px solid grey";

const GameBoard = ({ game }) => (
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
        {game.report.rounds
          .filter(round => round.round > 0)
          .map(round =>
            round.visibleTurns.map((turn, index) => (
              <GameTurn
                firstEmptyRow={
                  round.round === game.report.rounds.length - 1 &&
                  turn.turn === 1
                }
                lastRow={
                  round.round === game.report.rounds.length - 1 &&
                  turn.turn === round.visibleTurns.length
                }
                key={`turn_${round.round}_${turn.turn}`}
                turn={turn}
                previousTurns={turn.previousTurns}
                turnIndex={index}
                roundsPerTurn={round.visibleTurns.length}
              />
            ))
          )}
      </tbody>
    </Table>

    <h2>Cards</h2>
    <Table bordered>
      <tbody>
        {game.report.players.map((player, index) => (
          <tr key={player.playerId}>
            <td>Player {index}</td>
            <td>
              {player.playerCards.map(dealtCard => (
                <span key={dealtCard.id}>{dealtCard.card.cardLabel}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

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
