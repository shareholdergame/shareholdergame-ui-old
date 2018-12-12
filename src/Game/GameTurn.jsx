import React from "react";

import Color from "color";

import { bool, number, shape } from "prop-types";

import { allColors } from "../Cards/CardColor";

import {
  getFirstStepCells,
  getLastStepCells,
  getBankAmounts
} from "./GameTurnHelper";

const THICK_BORDER = "2px solid grey";

const GameTurn = ({
  turn,
  turnIndex,
  turnsPerRound,
  firstEmptyRow = false,
  lastRow = false
}) => {
  let tableCells = [];

  const bankCellStyle = {
    borderLeft: THICK_BORDER,
    borderRight: THICK_BORDER,
    textAlign: "left",
    verticalAlign: "middle"
  };

  const cardCellStyle = {
    borderLeft: THICK_BORDER,
    borderRight: THICK_BORDER,
    verticalAlign: "middle"
  };

  if (lastRow) {
    bankCellStyle.borderBottom = THICK_BORDER;
    cardCellStyle.borderBottom = THICK_BORDER;
  }

  if (turnIndex === 0) {
    tableCells.push(
      <th
        key="roundNumber"
        rowSpan={turnsPerRound}
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

  const firstStepCells = getFirstStepCells(turn);

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
      {turn.appliedCard.card.getCardLabel(
        turn.appliedCard.priceChangeOperationIds
      )}
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
          backgroundColor: Color(allColors[index].style).alpha(0.1),
          verticalAlign: "middle"
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

    return cells;
  }, tableCells);

  const lastStepCells = getLastStepCells(turn);

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
      {getBankAmounts(turn)}
    </td>
  );

  return (
    <tr
      key={`turn_${turn.round}_${turn.turn}`}
      style={
        !turnIndex
          ? { borderTop: THICK_BORDER, verticalAlign: "middle" }
          : { verticalAlign: "middle" }
      }
    >
      {tableCells}
    </tr>
  );
};

GameTurn.propTypes = {
  firstEmptyRow: bool,
  lastRow: bool,
  turnIndex: number.isRequired,
  turnsPerRound: number.isRequired,
  turn: shape({ turn: number.isRequired, round: number.isRequired })
};

GameTurn.defaultProps = {
  firstEmptyRow: false,
  lastRow: false,
  turn: null
};

export default GameTurn;
