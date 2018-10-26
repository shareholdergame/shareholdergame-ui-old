import React from "react";
import { number, shape, string } from "prop-types";

import CardLabel from "./CardLabel";

const SmallCardLabel = ({ card }) => (
  <CardLabel color={card.color.style}>
    {card.value > 0 ? `+${card.value}` : card.value}
    {card.color.letter}
  </CardLabel>
);

SmallCardLabel.propTypes = {
  card: shape({
    color: shape({
      letter: string.isRequired,
      style: string.isRequired
    }).isRequired,
    value: number.isRequired
  }).isRequired
};

export default SmallCardLabel;
