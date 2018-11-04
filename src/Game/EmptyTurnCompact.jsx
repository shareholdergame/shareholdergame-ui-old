import React from "react";

import { number } from "prop-types";

import { allColors } from "../Cards/CardColor";
import ShareCell from "./ShareCell";

const THICK_BORDER = "2px solid grey";

const EmptyTurnCompact = ({ roundNumber, turnIndex, turnsPerRound }) => {
  const prefixCells = [];

  if (turnIndex === 0) {
    prefixCells.push(
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
        {roundNumber}
      </th>
    );
  }

  prefixCells.push(
    <td
      style={{
        border: THICK_BORDER,
        verticalAlign: "middle"
      }}
    />
  );

  const colorCells = allColors.map(color => (
    <ShareCell key={`price_${color.letter}`} color={color} />
  ));

  const bankCell = (
    <td
      style={{
        textAlign: "left",
        verticalAlign: "middle",
        border: THICK_BORDER
      }}
    >
      &nbsp;
    </td>
  );

  return (
    <tr style={{ border: THICK_BORDER }}>
      {prefixCells}
      {colorCells}
      {bankCell}
    </tr>
  );
};

EmptyTurnCompact.propTypes = {
  roundNumber: number.isRequired,
  turnIndex: number.isRequired,
  turnsPerRound: number.isRequired
};

export default EmptyTurnCompact;
