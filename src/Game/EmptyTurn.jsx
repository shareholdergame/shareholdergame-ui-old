import React from "react";

import { bool, number } from "prop-types";

import { BLUE, RED, YELLOW, GREEN } from "../Cards/CardColor";
import ShareCell from "./ShareCell";

const THICK_BORDER = "2px solid grey";

const EmptyTurn = ({
  roundNumber,
  turnIndex,
  turnsPerRound,
  lastRow = false,
  firstEmptyRow = false
}) => {
  const tableCells = [];

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
        {roundNumber}
      </th>
    );
  }

  if (lastRow) {
    tableCells.push(<td key="first" colSpan={4} />);
  } else {
    tableCells.push(<ShareCell key="first_blue" color={BLUE} />);
    tableCells.push(<ShareCell key="first_red" color={RED} />);
    tableCells.push(<ShareCell key="first_yellow" color={YELLOW} />);
    tableCells.push(<ShareCell key="first_green" color={GREEN} />);
  }

  const cardAndPriceStyle =
    lastRow && !firstEmptyRow ? { borderBottom: THICK_BORDER } : {};

  tableCells.push(
    <td
      key="card"
      style={{
        ...cardAndPriceStyle,
        borderLeft: THICK_BORDER,
        borderRight: THICK_BORDER
      }}
    />
  );

  tableCells.push(
    <ShareCell key="price_blue" color={BLUE} style={cardAndPriceStyle} />
  );
  tableCells.push(
    <ShareCell key="price_red" color={RED} style={cardAndPriceStyle} />
  );
  tableCells.push(
    <ShareCell key="price_yellow" color={YELLOW} style={cardAndPriceStyle} />
  );
  tableCells.push(
    <ShareCell
      key="price_green"
      color={GREEN}
      style={{ ...cardAndPriceStyle, borderRight: THICK_BORDER }}
    />
  );

  if (lastRow) {
    tableCells.push(<td key="last" colSpan={4} />);
  } else {
    tableCells.push(<ShareCell key="last_blue" color={BLUE} />);
    tableCells.push(<ShareCell key="last_red" color={RED} />);
    tableCells.push(<ShareCell key="last_yellow" color={YELLOW} />);
    tableCells.push(<ShareCell key="last_green" color={GREEN} />);
  }

  tableCells.push(
    <td key="bank" style={{ border: THICK_BORDER }}>
      &nbsp;
    </td>
  );

  return (
    <tr style={turnIndex === 0 ? { borderTop: THICK_BORDER } : {}}>
      {tableCells}
    </tr>
  );
};

EmptyTurn.propTypes = {
  roundNumber: number.isRequired,
  lastRow: bool,
  firstEmptyRow: bool,
  turnIndex: number.isRequired,
  turnsPerRound: number.isRequired
};

EmptyTurn.defaultProps = {
  lastRow: false,
  firstEmptyRow: false
};

export default EmptyTurn;
