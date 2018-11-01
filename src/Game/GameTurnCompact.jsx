import React from "react";

import Color from "color";

import { bool, number, shape } from "prop-types";

import { allColors } from "../Cards/CardColor";

import ShareCell from "./ShareCell";

const THICK_BORDER = "2px solid grey";

const GameTurnCompact = ({ lastRound, turn, turnIndex, turnsPerRound }) => {
  const rowsPerTurn = lastRound ? 1 : 3;

  const prefixCells = [];
  let priceCells = [];

  let bank = 0;

  const cardCellStyle = {
    border: THICK_BORDER,
    verticalAlign: "middle"
  };

  if (turnIndex === 0) {
    prefixCells.push(
      <th
        key="roundNumber"
        rowSpan={turnsPerRound * rowsPerTurn}
        style={{
          borderTopLeftRadius: "1em 1em",
          borderBottomLeftRadius: "1em 1em",
          width: "1.5em",
          fontSize: "large",
          textAlign: "center",
          verticalAlign: "middle",
          border: THICK_BORDER
        }}
      >
        {turn.round}
      </th>
    );
  }

  prefixCells.push(
    <td style={cardCellStyle} rowSpan={rowsPerTurn} key="card">
      {turn.appliedCard.card.cardLabel}
    </td>
  );

  const firstStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "FIRST_BUY_SELL_STEP") {
      step.shares
        .sort((a, b) => a.id - b.id)
        .forEach((share, index) =>
          cells.push(
            <ShareCell key={share.id} share={share} color={allColors[index]} />
          )
        );
    }

    bank = step.cashValue;

    return cells;
  }, []);

  const bankCellStyle = {
    border: THICK_BORDER,
    textAlign: "left",
    verticalAlign: "middle"
  };

  const bankCell = (
    <td key="bank" style={bankCellStyle} rowSpan={rowsPerTurn}>
      {bank}
    </td>
  );

  priceCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "PRICE_CHANGE_STEP") {
      step.sharePrices.sort((a, b) => a.id - b.id).forEach((share, index) => {
        const priceIncrease =
          (share.priceOperationId && share.priceOperationId < 6) ||
          share.priceOperationId === 12;

        const priceDecrease =
          share.priceOperationId &&
          share.priceOperationId >= 6 &&
          share.priceOperationId !== 12;

        const priceCellStyle = {
          color:
            priceIncrease || priceDecrease
              ? "black"
              : Color(allColors[index].style)
                  .darken(0.5)
                  .alpha(0.2),
          backgroundColor: Color(allColors[index].style).alpha(0.1)
        };

        if (index === allColors.length - 1) {
          priceCellStyle.borderRight = THICK_BORDER;
        }

        cells.push(
          <td key={`price_${share.id}`} style={priceCellStyle}>
            {share.price}
          </td>
        );
      });
    }

    bank = step.cashValue;

    return cells;
  }, priceCells);

  const lastStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "LAST_BUY_SELL_STEP") {
      step.shares
        .sort((a, b) => a.id - b.id)
        .forEach((share, index) =>
          cells.push(
            <ShareCell key={share.id} share={share} color={allColors[index]} />
          )
        );
    }

    bank = step.cashValue;

    return cells;
  }, []);

  return lastRound ? (
    <tr style={{ border: THICK_BORDER }}>
      {prefixCells}
      {priceCells}
      {bankCell}
    </tr>
  ) : (
    [
      <tr style={{ borderTop: THICK_BORDER }}>
        {prefixCells}
        {firstStepCells}
        {bankCell}
      </tr>,
      <tr>{priceCells}</tr>,
      <tr style={{ borderBottom: THICK_BORDER }}>{lastStepCells}</tr>
    ]
  );
};

GameTurnCompact.propTypes = {
  lastRound: bool,
  turnIndex: number.isRequired,
  turnsPerRound: number.isRequired,
  turn: shape({ turn: number.isRequired, round: number.isRequired }).isRequired
};

GameTurnCompact.defaultProps = {
  lastRound: false
};

export default GameTurnCompact;
