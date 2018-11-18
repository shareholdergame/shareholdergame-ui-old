import React from "react";
import { shape, string, number } from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Color from "color";

export const MINUS_10 = -10;
export const MINUS_20 = -20;
export const MINUS_30 = -30;

const bottomStyle = {
  display: "inline-block",
  textAlign: "center",
  width: "33%",
  padding: "0.35em"
};

const getBarStyle = (barNumber, colorStyle) => ({
  display: "inline-block",
  position: "absolute",
  zIndex: "-1",
  width: "0",
  height: "0",
  borderLeft: "1em solid transparent",
  borderRight: "1em solid transparent",
  borderTop: `1em solid ${Color(colorStyle).alpha(0.3)}`
});

const barNumberStyle = {
  display: "inline-block",
  marginTop: "0.8em",
  width: "2em"
};

const barBoxStyle = { fontSize: "0.8em", position: "relative" };

const ColorBar100 = ({ barNumber, color, intl }) => (
  <div style={bottomStyle}>
    <span style={barBoxStyle}>
      <div style={getBarStyle(barNumber, color.style)}>&nbsp;</div>
      <span style={barNumberStyle}>
        {barNumber}
        {color.letter ? intl.formatMessage(color.letter) : ""}
      </span>
    </span>
  </div>
);

ColorBar100.propTypes = {
  color: shape({
    letter: shape(),
    style: string.isRequired
  }).isRequired,
  barNumber: number.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(ColorBar100);
