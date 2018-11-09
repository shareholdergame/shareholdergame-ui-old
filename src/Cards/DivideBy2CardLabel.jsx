import React from "react";
import { shape, string } from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Color from "color";

import { CARD_RADIUS } from "./Card";

const DivideBy2CardLabel = ({ card, intl }) => (
  <span
    style={{
      borderRadius: CARD_RADIUS,
      margin: "0.2em 0.2em",
      display: "inline-block",
      minWidth: "7.5em"
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        borderTopLeftRadius: CARD_RADIUS,
        borderTopRightRadius: CARD_RADIUS,
        border: `1px solid grey`,
        fontSize: "1.3em",
        padding: "0.35em 0.2em 0.2em 0.2em",
        textAlign: "center",
        borderBottom: "0"
      }}
    >
      x2?
    </div>
    <div
      style={{
        backgroundColor: Color(card.color.style).alpha(0.2),
        borderBottomLeftRadius: CARD_RADIUS,
        borderBottomRightRadius: CARD_RADIUS,
        border: `1px solid ${Color(card.color.style).darken(0.3)}`,
        fontSize: "1.3em",
        padding: "0.35em 0.2em 0.2em 0.2em",
        textAlign: "center"
      }}
    >
      {card.cardString}
      {intl.formatMessage(card.color.letter)}
    </div>
  </span>
);

DivideBy2CardLabel.propTypes = {
  card: shape({
    color: shape({
      letter: shape().isRequired,
      style: string.isRequired
    }).isRequired,
    cardString: string.isRequired
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(DivideBy2CardLabel);
