import React from "react";

import Table from "react-bootstrap/lib/Table";

import { number, arrayOf, shape } from "prop-types";

const GameScore = ({ game }) => (
  <Table bordered>
    <tbody>
      {game.result.sort((a, b) => a.turnOrder - b.turnOrder).map(result => (
        <tr key={result.player.id}>
          <td>{result.player.name}</td>
          <td>{result.totalFunds}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

GameScore.propTypes = {
  game: shape({
    result: arrayOf(
      shape({
        totalFunds: number.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default GameScore;
