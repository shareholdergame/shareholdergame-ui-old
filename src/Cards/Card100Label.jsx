import React from "react";
import { shape, string, node } from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Color from "color";

import { CARD_RADIUS } from "./Card";

import { RED, BLUE, YELLOW } from "./CardColor";

import ColorBar100, { MINUS_10, MINUS_20, MINUS_30 } from "./ColorBar100";

const Card100Label = ({ card, intl }) => (
  <span
    style={{
      borderTopLeftRadius: CARD_RADIUS,
      borderTopRightRadius: CARD_RADIUS,
      margin: "0.2em 0.2em",
      display: "inline-block",
      minWidth: "7.5em"
    }}
  >
    <div
      style={{
        backgroundColor: Color(card.color.style).alpha(0.2),
        borderTopLeftRadius: CARD_RADIUS,
        borderTopRightRadius: CARD_RADIUS,
        border: `1px solid ${Color(card.color.style).darken(0.3)}`,
        fontSize: "1.3em",
        padding: "0.28em 0.2em",
        textAlign: "center",
        borderBottom: "0"
      }}
    >
      {card.cardString}
      {intl.formatMessage(card.color.letter)}
    </div>
    <div
      style={{
        border: "1px solid grey",
        borderBottomLeftRadius: CARD_RADIUS,
        borderBottomRightRadius: CARD_RADIUS
      }}
    >
      <ColorBar100 color={RED} barNumber={MINUS_30} />
      <ColorBar100 color={BLUE} barNumber={MINUS_20} />
      <ColorBar100 color={YELLOW} barNumber={MINUS_10} />
    </div>
  </span>
);

Card100Label.propTypes = {
  card: shape({
    color: shape({
      letter: node.isRequired,
      style: string.isRequired
    }).isRequired,
    cardString: string.isRequired
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(Card100Label);
