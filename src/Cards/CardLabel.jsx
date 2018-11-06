import React from "react";
import { bool, node, string } from "prop-types";
import Color from "color";

const CardLabel = ({ color, large, children }) => (
  <span
    style={{
      backgroundColor: Color(color).alpha(0.2),
      padding: large ? "0.8em 1em" : "0.1em 0.5em",
      borderRadius: "0.5em",
      margin: "0 0.5em",
      border: `1px solid ${Color(color).darken(0.3)}`,
      display: "inline-block"
    }}
  >
    {children}
  </span>
);

CardLabel.propTypes = {
  color: string.isRequired,
  children: node.isRequired,
  large: bool
};

CardLabel.defaultProps = {
  large: false
};

export default CardLabel;
