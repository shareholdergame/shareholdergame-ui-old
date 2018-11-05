import React from "react";

import Table from "react-bootstrap/lib/Table";
import Image from "react-bootstrap/lib/Image";

import { number, arrayOf, shape } from "prop-types";

const GameScore = ({ game, self }) => (
  <div>
    <Table bordered>
      <tbody>
        {game.result.sort((a, b) => a.turnOrder - b.turnOrder).map(result => (
          <tr key={result.player.id}>
            <td>
              <Image
                src={`/images/userpics/${result.player.avatar}`}
                width="36"
                height="36"
                circle
                style={{ marginRight: "1em" }}
              />
              {result.player.name}
            </td>
            <td>{result.totalFunds}</td>
            <td>
              {(self.id === result.player.id
                ? result.playerCards
                : result.appliedCards
              ).map(displayedCard => (
                <span key={displayedCard.id}>
                  {displayedCard.card.cardLabel}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

GameScore.propTypes = {
  game: shape({
    result: arrayOf(
      shape({
        totalFunds: number.isRequired
      }).isRequired
    ).isRequired
  }).isRequired,
  self: shape({
    id: number
  })
};

GameScore.defaultProps = {
  self: null
};

export default GameScore;
