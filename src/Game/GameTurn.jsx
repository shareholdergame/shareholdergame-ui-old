import React from "react";

import { number, shape } from "prop-types";

const colors = ["blue", "red", "yellow", "green"];

const GameTurn = ({ turn, turnIndex, roundsPerTurn }) => {
  let tableCells = [];
  let bank = 0;

  if (turnIndex === 0) {
    tableCells.push(
      <th
        key="roundNumber"
        rowSpan={roundsPerTurn}
        style={{ width: "2em", fontSize: "large" }}
      >
        {turn.round}
      </th>
    );
  }

  const firstStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "FIRST_BUY_SELL_STEP") {
      step.shares.sort((a, b) => a.id - b.id).forEach((share, index) =>
        cells.push(
          <td
            key={`first_${share.id}`}
            style={{ borderTop: `3px solid ${colors[index]}` }}
          >
            {share.amount}
          </td>
        )
      );
    }

    bank = step.cashValue;

    return cells;
  }, []);

  if (firstStepCells.length > 0) {
    tableCells = tableCells.concat(firstStepCells);
  } else {
    tableCells.push(<td key="emptyFirst" colSpan={4} />);
  }

  tableCells.push(<td key="card">{turn.appliedCardId}</td>);

  tableCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "PRICE_CHANGE_STEP") {
      step.sharePrices.sort((a, b) => a.id - b.id).forEach((share, index) =>
        cells.push(
          <td
            key={`price_${share.id}`}
            style={{ borderTop: `3px solid ${colors[index]}` }}
          >
            {share.price}
          </td>
        )
      );
    }

    bank = step.cashValue;

    return cells;
  }, tableCells);

  const lastStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "LAST_BUY_SELL_STEP") {
      step.shares.sort((a, b) => a.id - b.id).forEach((share, index) =>
        cells.push(
          <td
            key={`last_${share.id}`}
            style={{ borderTop: `3px solid ${colors[index]}` }}
          >
            {share.amount}
          </td>
        )
      );
    }

    bank = step.cashValue;

    return cells;
  }, []);

  if (lastStepCells.length > 0) {
    tableCells = tableCells.concat(lastStepCells);
  } else {
    tableCells.push(<td key="emptyLast" colSpan={4} />);
  }

  tableCells.push(
    <td key="bank" style={{ textAlign: "left" }}>
      {bank}
    </td>
  );

  return <tr>{tableCells}</tr>;
};

GameTurn.propTypes = {
  turnIndex: number.isRequired,
  roundsPerTurn: number.isRequired,
  turn: shape({ turn: number.isRequired, round: number.isRequired }).isRequired
};
export default GameTurn;
