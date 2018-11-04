import React from "react";

import { bool, number, arrayOf, shape } from "prop-types";

import { allColors } from "../Cards/CardColor";
import ShareCell from "./ShareCell";

const THICK_BORDER = "2px solid grey";

const CurrentTurnCompact = ({
  previousTurns,
  roundNumber,
  turnIndex,
  turnsPerRound,
  lastRound
}) => {
  const rowsPerTurn = lastRound ? 1 : 3;

  const prefixCells = [];

  if (turnIndex === 0) {
    prefixCells.push(
      <th
        key="roundNumber"
        rowSpan={rowsPerTurn + turnsPerRound - 1}
        style={{
          width: "2em",
          fontSize: "large",
          textAlign: "center",
          verticalAlign: "middle",
          border: THICK_BORDER
        }}
      >
        {roundNumber}
      </th>
    );
  }

  const selectedRowStyle = {
    backgroundColor: "#efefef"
  };

  prefixCells.push(
    <td
      rowSpan={rowsPerTurn}
      style={{
        ...selectedRowStyle,
        border: THICK_BORDER,
        verticalAlign: "middle"
      }}
    >
      <select>
        <option />
        <option>+30r</option>
        <option>100g</option>
        <option>+30r</option>
        <option>+30r</option>
        <option>+30r</option>
        <option>+30r</option>
        <option>+30r</option>
      </select>
    </td>
  );

  const myPreviousTurn = previousTurns[0];
  const myPreviousSellStep = myPreviousTurn.steps.find(
    step => step.stepType === "LAST_BUY_SELL_STEP"
  );
  const myPreviousStocks = myPreviousSellStep.shares.map(share => share.amount);

  const firstStepCells = allColors.map((color, index) => (
    <ShareCell key={`first_${color.letter}`} color={color} current>
      <input
        type="number"
        min={0}
        step={1}
        className="input"
        style={{ width: "100%", textAlign: "center" }}
        value={myPreviousStocks[index]}
      />
    </ShareCell>
  ));

  const immediatelyPreviousTurn = previousTurns[previousTurns.length - 1];
  const previousPrices = immediatelyPreviousTurn.steps
    .find(step => step.stepType === "PRICE_CHANGE_STEP")
    .sharePrices.map(price => price.price);

  const priceCells = allColors.map((color, index) => (
    <ShareCell key={`price_${color.letter}`} color={color} current>
      {previousPrices[index]}
    </ShareCell>
  ));

  const lastStepCells = allColors.map((color, index) => (
    <ShareCell
      key={`last_${color.letter}`}
      color={color}
      current
      style={index ? {} : { borderLeft: THICK_BORDER }}
    >
      <input
        type="number"
        min={0}
        step={1}
        className="input"
        style={{ width: "100%", textAlign: "center" }}
        value={myPreviousStocks[index]}
      />
    </ShareCell>
  ));

  const bankCell = (
    <td
      style={{
        ...selectedRowStyle,
        textAlign: "left",
        verticalAlign: "middle",
        border: THICK_BORDER
      }}
      rowSpan={rowsPerTurn}
    >
      {myPreviousTurn.bank}
    </td>
  );

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

CurrentTurnCompact.propTypes = {
  previousTurns: arrayOf(shape()).isRequired,
  roundNumber: number.isRequired,
  lastRound: bool,
  turnIndex: number.isRequired,
  turnsPerRound: number.isRequired
};

CurrentTurnCompact.defaultProps = {
  lastRound: false
};

export default CurrentTurnCompact;
