import React from "react";
import { number, shape, string } from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import Color from "color";

import { CARD_RADIUS } from "./Card";

const SmallCardLabel = ({ card, intl }) => {
  const style = {
    backgroundColor: "white",
    padding: "0.3em 1em",
    margin: "0 0.5em",
    border: `1px solid grey`,
    display: "block",
    textAlign: "center"
  };

  const upper = {
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    borderBottom: "1px solid grey"
  };

  const lower = {
    borderBottomLeftRadius: CARD_RADIUS,
    borderBottomRightRadius: CARD_RADIUS,
    borderTop: "0"
  };

  const cardStyle = {
    backgroundColor: Color(card.color.style).alpha(0.2),
    border: `1px solid ${Color(card.color.style).darken(0.3)}`
  };

  const upperLabel =
    card.value > 0
      ? `${card.cardString}${intl.formatMessage(card.color.letter)}`
      : `${card.oppositeString}?`;

  const lowerLabel =
    card.value < 0
      ? `${card.cardString}${intl.formatMessage(card.color.letter)}`
      : `${card.oppositeString}??`;

  return (
    <span style={{ display: "inline-block" }}>
      <span
        style={
          card.value > 0
            ? { ...style, ...cardStyle, ...upper }
            : { ...style, ...upper }
        }
      >
        {upperLabel}
      </span>
      <span
        style={
          card.value < 0
            ? { ...style, ...cardStyle, ...lower }
            : { ...style, ...lower }
        }
      >
        {lowerLabel}
      </span>
    </span>
  );
};

SmallCardLabel.propTypes = {
  card: shape({
    color: shape({
      letter: shape().isRequired,
      style: string.isRequired
    }).isRequired,
    value: number.isRequired,
    cardString: string.isRequired
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(SmallCardLabel);
