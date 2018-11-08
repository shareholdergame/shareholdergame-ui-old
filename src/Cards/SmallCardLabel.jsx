import React from "react";
import { number, shape, string, node } from "prop-types";
import { injectIntl, intlShape } from "react-intl";

import Color from "color";

const SmallCardLabel = ({ card, intl }) => {
  const style = {
    backgroundColor: "white",
    padding: "0 0.5em",
    margin: "0 0.5em",
    border: `1px solid silver`,
    display: "block",
    textAlign: "center"
  };

  const upper = {
    borderTopLeftRadius: "0.5em",
    borderTopRightRadius: "0.5em",
    borderBottom: "1px solid silver"
  };

  const lower = {
    borderBottomLeftRadius: "0.5em",
    borderBottomRightRadius: "0.5em",
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
      letter: node.isRequired,
      style: string.isRequired
    }).isRequired,
    value: number.isRequired,
    cardString: string.isRequired
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(SmallCardLabel);
