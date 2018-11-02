import React from "react";

import { node, string, shape, bool } from "prop-types";

import Color from "color";

const ShareCell = ({ color, children, style, current }) => (
  <td
    style={{
      ...style,
      backgroundColor: Color(color.style)
        .alpha(0.1)
        .darken(current ? 0.5 : 0)
    }}
  >
    {children}
  </td>
);

ShareCell.propTypes = {
  color: shape({
    style: string.isRequired
  }).isRequired,
  children: node.isRequired,
  style: shape(),
  current: bool
};

ShareCell.defaultProps = {
  style: {},
  current: false
};

export default ShareCell;
