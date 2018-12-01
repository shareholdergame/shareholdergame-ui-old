import React from "react";
import { shape, string, arrayOf, number } from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Color from "color";

import { CARD_RADIUS } from "./Card";

import { UNKNOWN, allColors } from "../Cards/CardColor";

import ColorArrow from "./ColorArrow";

import { multipleBy2CardPrefixHTML } from "./MultiplyBy2Card";

const DivideBy2CardLabel = ({ card, operationIds, intl }) => {
  let multiplyBy2Color = UNKNOWN;

  if (operationIds) {
    operationIds.forEach((value, index) => {
      if (value === 12) {
        multiplyBy2Color = allColors[index];
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
          backgroundColor: "white",
          borderTopLeftRadius: CARD_RADIUS,
          borderTopRightRadius: CARD_RADIUS,
          border: `1px solid grey`,
          fontSize: "1.3em",
          padding: "0.35em 0.2em 0.2em 0.8em",
          textAlign: "left",
          borderBottom: "0"
        }}
      >
        <ColorArrow color={multiplyBy2Color} isUp />
        <span
          /* eslint-disable-line react/no-danger */ dangerouslySetInnerHTML={{
            __html: multipleBy2CardPrefixHTML
          }}
        />
        {intl.formatMessage(multiplyBy2Color.letter)}
      </div>
      <div
        style={{
          backgroundColor: Color(card.color.style).alpha(0.2),
          borderBottomLeftRadius: CARD_RADIUS,
          borderBottomRightRadius: CARD_RADIUS,
          border: `1px solid ${Color(card.color.style).darken(0.3)}`,
          fontSize: "1.3em",
          padding: "0.35em 0.2em 0.2em 0.8em",
          textAlign: "left"
        }}
      >
        <ColorArrow color={card.color} isUp={false} />
        <span
          /* eslint-disable-line react/no-danger */ dangerouslySetInnerHTML={{
            __html: card.cardHTML
          }}
        />
        {intl.formatMessage(card.color.letter)}
      </div>
    </span>
  );
};

DivideBy2CardLabel.propTypes = {
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

DivideBy2CardLabel.defaultProps = {
  operationIds: null
};

export default injectIntl(DivideBy2CardLabel);
