import React from "react";
import { number, shape, string } from "prop-types";

const SmallCardLabel = ({ card }) => (
  <span style={{ color: card.color.style }}>
    {card.value > 0 ? `+${card.value}` : card.value}
    {card.color.letter}
  </span>
);

SmallCardLabel.propTypes = {
  card: shape({
    color: shape({
      letter: string.isRequired,
      value: number.isRequired
    }).isRequired,
    value: number.isRequired
  }).isRequired
};

export default SmallCardLabel;
