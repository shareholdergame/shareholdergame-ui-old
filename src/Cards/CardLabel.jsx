import React from "react";
import { node, string } from "prop-types";
import Color from "color";

const CardLabel = ({ color, children }) => (
  <span
    style={{
      backgroundColor: Color(color).alpha(0.2),
      padding: "0.1em 0.5em",
      borderRadius: "0.5em",
      margin: "0 0.5em",
      border: `1px solid ${Color(color).darken(0.3)}`
    }}
  >
    {children}
  </span>
);

CardLabel.propTypes = {
  color: string.isRequired,
  children: node.isRequired
};

export default CardLabel;
