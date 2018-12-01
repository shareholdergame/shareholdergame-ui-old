import React from "react";
import { shape, string, bool } from "prop-types";
import Color from "color";

const arrowBoxStyle = {
  display: "inline-block",
  textAlign: "center",
  marginRight: "0.4em",
  padding: "0.55em"
};

const getColorArrowStyle = (isUp, colorStyle) => {
  const directionStyle = `1em solid ${Color(colorStyle).alpha(0.3)}`;
  const baseStyle = {
    display: "inline-block",
    position: "absolute",
    width: "0",
    height: "0",
    borderLeft: "1em solid transparent",
    borderRight: "1em solid transparent"
  };

  const arrowStyle = isUp
    ? { ...baseStyle, borderBottom: directionStyle }
    : { ...baseStyle, borderTop: directionStyle };

  return arrowStyle;
};

const barBoxStyle = { fontSize: "0.6em", position: "relative" };

const ColorArrow = ({ isUp, color }) => (
  <div style={arrowBoxStyle}>
    <span style={barBoxStyle}>
      <div style={getColorArrowStyle(isUp, color.style)} />
    </span>
  </div>
);

ColorArrow.propTypes = {
  isUp: bool,
  color: shape({
    letter: shape(),
    style: string.isRequired
  }).isRequired
};

ColorArrow.defaultProps = {
  isUp: false
};

export default ColorArrow;
