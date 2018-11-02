import React from "react";

import { bool, number } from "prop-types";

import { BLUE, RED, YELLOW, GREEN } from "../Cards/CardColor";
import ShareCell from "./ShareCell";

const THICK_BORDER = "2px solid grey";

const CurrentTurn = ({
  roundNumber,
  turnIndex,
  roundsPerTurn,
  lastRow = false
}) => {
  const tableCells = [];

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
        {roundNumber}
      </th>
    );
  }

  const selectedRowStyle = {
    backgroundColor: "#efefef"
  };

  if (lastRow) {
    tableCells.push(<td colSpan={4} style={selectedRowStyle} />);
  } else {
    tableCells.push(
      <ShareCell key="last_blue" color={BLUE} current>
        Input
      </ShareCell>
    );
    tableCells.push(
      <ShareCell key="last_red" color={RED} current>
        Input
      </ShareCell>
    );
    tableCells.push(
      <ShareCell key="last_yellow" color={YELLOW} current>
        Input
      </ShareCell>
    );
    tableCells.push(
      <ShareCell key="last_green" color={GREEN} current>
        Input
      </ShareCell>
    );
  }

  tableCells.push(
    <td style={{ ...selectedRowStyle, border: THICK_BORDER }}>Card</td>
  );

  tableCells.push(
    <ShareCell key="price_blue" color={BLUE} current>
      Price
    </ShareCell>
  );
  tableCells.push(
    <ShareCell key="price_red" color={RED} current>
      Price
    </ShareCell>
  );
  tableCells.push(
    <ShareCell key="price_yellow" color={YELLOW} current>
      Price
    </ShareCell>
  );
  tableCells.push(
    <ShareCell
      key="price_green"
      color={GREEN}
      style={{ borderRight: THICK_BORDER }}
      current
    >
      Price
    </ShareCell>
  );

  if (lastRow) {
    tableCells.push(<td colSpan={4} style={selectedRowStyle} />);
  } else {
    tableCells.push(
      <ShareCell key="last_blue" color={BLUE} current>
        Input
      </ShareCell>
    );
    tableCells.push(
      <ShareCell key="last_red" color={RED} current>
        Input
      </ShareCell>
    );
    tableCells.push(
      <ShareCell key="last_yellow" color={YELLOW} current>
        Input
      </ShareCell>
    );
    tableCells.push(
      <ShareCell key="last_green" color={GREEN} current>
        Input
      </ShareCell>
    );
  }

  tableCells.push(
    <td style={{ ...selectedRowStyle, border: THICK_BORDER }}>Bank</td>
  );

  return (
    <tr style={{ borderTop: THICK_BORDER, borderBottom: THICK_BORDER }}>
      {tableCells}
    </tr>
  );
};

CurrentTurn.propTypes = {
  roundNumber: number.isRequired,
  lastRow: bool,
  turnIndex: number.isRequired,
  roundsPerTurn: number.isRequired
};

CurrentTurn.defaultProps = {
  lastRow: false
};

export default CurrentTurn;
