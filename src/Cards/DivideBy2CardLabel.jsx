import React from "react";
import { shape, string, node } from "prop-types";
import CardLabel from "./CardLabel";

const DivideBy2CardLabel = ({ card }) => (
  <CardLabel color={card.color.style}>:2{card.color.letter}</CardLabel>
);

DivideBy2CardLabel.propTypes = {
  card: shape({
    color: shape({
      letter: node.isRequired,
      style: string.isRequired
    }).isRequired
  }).isRequired
};

export default DivideBy2CardLabel;
