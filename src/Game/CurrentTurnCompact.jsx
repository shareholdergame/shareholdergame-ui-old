import React from "react";

import { injectIntl, intlShape } from "react-intl";

import { allColors } from "../Cards/CardColor";
import ShareCell from "./ShareCell";

import {
  CurrentTurnPropTypes,
  CurrentTurnDefaultProps
} from "./CurrentTurnPropTypes";

const THICK_BORDER = "2px solid grey";

const CurrentTurnCompact = ({
  previousTurns,
  roundNumber,
  turnIndex,
  turnsPerRound,
  lastRound,
  outstandingCards,
  onUpdateTurn,
  intl
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
      key="card"
      rowSpan={rowsPerTurn}
      style={{
        ...selectedRowStyle,
        border: THICK_BORDER,
        verticalAlign: "middle"
      }}
    >
      <select>
        <option />
        {outstandingCards.map(outstandingCard => (
          <option key={outstandingCard.id}>
            {outstandingCard.card.cardString}
            {intl.formatMessage(outstandingCard.card.color.letter)}
          </option>
        ))}
      </select>
    </td>
  );

  const myPreviousTurn = previousTurns[0];
  const myPreviousSellStep = myPreviousTurn.steps.find(
    step => step.stepType === "LAST_BUY_SELL_STEP"
  );
  const myPreviousStocks = myPreviousSellStep.shares.map(share => share.amount);

  const firstStepCells = allColors.map((color, index) => (
    <ShareCell
      key={`first_${intl.formatMessage(color.letter)}`}
      color={color}
      current
    >
      <input
        onChange={event => onUpdateTurn(true, index, event.target.value)}
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
    <ShareCell
      key={`price_${intl.formatMessage(color.letter)}`}
      color={color}
      current
    >
      {previousPrices[index]}
    </ShareCell>
  ));

  const lastStepCells = allColors.map((color, index) => (
    <ShareCell
      key={`last_${intl.formatMessage(color.letter)}`}
      color={color}
      current
      style={index ? {} : { borderLeft: THICK_BORDER }}
    >
      <input
        onChange={event => onUpdateTurn(false, index, event.target.value)}
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
    <tr
      key="current_turn_last_round"
      style={{ border: THICK_BORDER, verticalAlign: "middle" }}
    >
      {prefixCells}
      {priceCells}
      {bankCell}
    </tr>
  ) : (
    [
      <tr
        key="current_turn_first"
        style={{ borderTop: THICK_BORDER, verticalAlign: "middle" }}
      >
        {prefixCells}
        {firstStepCells}
        {bankCell}
      </tr>,
      <tr key="current_turn_price">{priceCells}</tr>,
      <tr key="current_turn_last" style={{ borderBottom: THICK_BORDER }}>
        {lastStepCells}
      </tr>
    ]
  );
};

CurrentTurnCompact.propTypes = {
  ...CurrentTurnPropTypes,
  intl: intlShape.isRequired
};

CurrentTurnCompact.defaultProps = CurrentTurnDefaultProps;

export default injectIntl(CurrentTurnCompact);
