import React from "react";
import { shape, string, arrayOf, number } from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Color from "color";

import { CARD_RADIUS } from "./Card";

import { UNKNOWN, allColors } from "../Cards/CardColor";

import ColorArrow from "./ColorArrow";

import { divideBy2CardPrefixHTML } from "./DivideBy2Card";

const MultiplyBy2CardLabel = ({ card, operationIds, intl }) => {
  let divideBy2Color = UNKNOWN;

  if (operationIds) {
    operationIds.forEach((value, index) => {
      if (value === 13) {
        divideBy2Color = allColors[index];
      }
    });
  }
  return (
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
          backgroundColor: Color(card.color.style).alpha(0.2),
          borderTopLeftRadius: CARD_RADIUS,
          borderTopRightRadius: CARD_RADIUS,
          border: `1px solid ${Color(card.color.style).darken(0.3)}`,
          fontSize: "1.3em",
          padding: "0.35em 0.2em 0.2em 0.8em",
          textAlign: "left",
          borderBottom: "0"
        }}
      >
        <ColorArrow color={card.color} isUp />
        <span
          /* eslint-disable-line react/no-danger */ dangerouslySetInnerHTML={{
            __html: card.cardHTML
          }}
        />
        {intl.formatMessage(card.color.letter)}
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderBottomLeftRadius: CARD_RADIUS,
          borderBottomRightRadius: CARD_RADIUS,
          border: "1px solid grey",
          fontSize: "1.3em",
          padding: "0.35em 0.2em 0.2em 0.8em",
          textAlign: "left"
        }}
      >
        <ColorArrow color={divideBy2Color} />
        <span
          /* eslint-disable-line react/no-danger */ dangerouslySetInnerHTML={{
            __html: divideBy2CardPrefixHTML
          }}
        />
        {divideBy2Color ? intl.formatMessage(divideBy2Color.letter) : "?"}
      </div>
    </span>
  );
};

MultiplyBy2CardLabel.propTypes = {
  card: shape({
    color: shape({
      letter: shape().isRequired,
      style: string.isRequired
    }).isRequired,
    cardHTML: string.isRequired
  }).isRequired,
  operationIds: arrayOf(number),
  intl: intlShape.isRequired
};

MultiplyBy2CardLabel.defaultProps = {
  operationIds: null
};

export default injectIntl(MultiplyBy2CardLabel);
