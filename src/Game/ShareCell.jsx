import React from "react";

import { string, number, shape } from "prop-types";

import Color from "color";

const ShareCell = ({ share, color }) => (
  <td
    style={{
      color: share.amount
        ? "black"
        : Color(color.style)
            .darken(0.5)
            .alpha(0.2),
      backgroundColor: Color(color.style).alpha(0.1)
    }}
  >
    {share.amount}
  </td>
);

ShareCell.propTypes = {
  share: shape({
    amount: number.isRequired
  }).isRequired,
  color: shape({
    style: string.isRequired
  }).isRequired
};

export default ShareCell;
