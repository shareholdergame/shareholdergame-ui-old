import React from "react";

import Table from "react-bootstrap/lib/Table";

import { bool, number, arrayOf, shape, string } from "prop-types";

const GameScore = ({ gameSet, game }) => (
  <Table bordered>
    <tbody>
      {gameSet.players.map((player, index) => (
        <tr key={player.id}>
          <td>{player.name}</td>
          <td>
            {
              game.result.sort((a, b) => a.turnOrder - b.turnOrder)[index]
                .totalFunds
            }
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

GameScore.propTypes = {
  gameSet: shape({
    players: arrayOf(
      shape({
        name: string,
        userpic: string,
        winner: bool,
        wonmoney: number
      })
    ).isRequired
  }).isRequired,
  game: shape({
    result: arrayOf(
      shape({
        totalFunds: number.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default GameScore;
