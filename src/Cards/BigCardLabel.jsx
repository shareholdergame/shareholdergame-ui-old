import React from "react";
import { shape, string, node } from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import CardLabel from "./CardLabel";

const BigCardLabel = ({ card, intl }) => (
  <CardLabel color={card.color.style} large>
    {card.cardString}
    {intl.formatMessage(card.color.letter)}
  </CardLabel>
);

BigCardLabel.propTypes = {
  card: shape({
    color: shape({
      letter: node.isRequired,
      style: string.isRequired
    }).isRequired,
    cardString: string.isRequired
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(BigCardLabel);
