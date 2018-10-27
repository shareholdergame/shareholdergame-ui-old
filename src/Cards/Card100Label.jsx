import React from "react";
import { shape, string } from "prop-types";
import CardLabel from "./CardLabel";

const Card100Label = ({ card }) => (
  <CardLabel color={card.color.style}>100{card.color.letter}</CardLabel>
);

Card100Label.propTypes = {
  card: shape({
    color: shape({
      letter: string.isRequired,
      style: string.isRequired
    }).isRequired
  }).isRequired
};

export default Card100Label;