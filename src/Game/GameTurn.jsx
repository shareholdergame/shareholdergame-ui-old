import React from "react";

import Color from "color";

import { bool, number, shape } from "prop-types";

import { allColors } from "../Cards/CardColor";

const THICK_BORDER = "2px solid grey";

const GameTurn = ({
  cardMap,
  turn,
  turnIndex,
  roundsPerTurn,
  firstEmptyRow = false,
  lastRow = false
}) => {
  let tableCells = [];
  let bank = 0;

  const bankCellStyle = {
    borderLeft: THICK_BORDER,
    borderRight: THICK_BORDER,
    textAlign: "left"
  };

  const cardCellStyle = {
    borderLeft: THICK_BORDER,
    borderRight: THICK_BORDER
  };

  if (lastRow) {
    bankCellStyle.borderBottom = THICK_BORDER;
    cardCellStyle.borderBottom = THICK_BORDER;
  }

  if (turnIndex === 0) {
    tableCells.push(
      <th
        key="roundNumber"
        rowSpan={roundsPerTurn}
        style={{
          width: "2em",
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

  const firstStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "FIRST_BUY_SELL_STEP") {
      step.shares.sort((a, b) => a.id - b.id).forEach((share, index) =>
        cells.push(
          <td
            key={`first_${share.id}`}
            style={{
              backgroundColor: Color(allColors[index].style).alpha(0.1)
            }}
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
    tableCells.push(
      <td
        style={firstEmptyRow ? { borderTop: THICK_BORDER } : {}}
        key="emptyFirst"
        colSpan={4}
      />
    );
  }

  tableCells.push(
    <td style={cardCellStyle} key="card">
      {cardMap[turn.appliedCardId].cardLabel}
    </td>
  );

  tableCells = turn.steps.reduce((cells, step) => {
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

        if (lastRow) {
          priceCellStyle.borderBottom = THICK_BORDER;
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
  }, tableCells);

  const lastStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "LAST_BUY_SELL_STEP") {
      step.shares.sort((a, b) => a.id - b.id).forEach((share, index) =>
        cells.push(
          <td
            key={`last_${share.id}`}
            style={{
              backgroundColor: Color(allColors[index].style).alpha(0.1)
            }}
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
    tableCells.push(
      <td
        style={
          firstEmptyRow
            ? {
                borderTop: THICK_BORDER
              }
            : {}
        }
        key="emptyLast"
        colSpan={4}
      />
    );
  }

  tableCells.push(
    <td key="bank" style={bankCellStyle}>
      {bank}
    </td>
  );

  return (
    <tr style={turn.turn === 1 ? { borderTop: THICK_BORDER } : {}}>
      {tableCells}
    </tr>
  );
};

GameTurn.propTypes = {
  cardMap: shape().isRequired,
  firstEmptyRow: bool,
  lastRow: bool,
  turnIndex: number.isRequired,
  roundsPerTurn: number.isRequired,
  turn: shape({ turn: number.isRequired, round: number.isRequired }).isRequired
};

GameTurn.defaultProps = {
  firstEmptyRow: false,
  lastRow: false
};

export default GameTurn;
