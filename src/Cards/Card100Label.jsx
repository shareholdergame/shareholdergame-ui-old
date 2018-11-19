import React from "react";
import { shape, string, arrayOf, number } from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Color from "color";

import { CARD_RADIUS } from "./Card";

import ColorBar100, { MINUS_10, MINUS_20, MINUS_30 } from "./ColorBar100";

import { UNKNOWN, allColors } from "../Cards/CardColor";

const Card100Label = ({ card, operationIds, intl }) => {
  let minus30color = UNKNOWN;
  let minus20color = UNKNOWN;
  let minus10color = UNKNOWN;

  if (operationIds) {
    operationIds.forEach((value, index) => {
      if (value === 9) {
        minus30color = allColors[index];
      }
      if (value === 10) {
        minus20color = allColors[index];
      }
      if (value === 11) {
        minus10color = allColors[index];
      }
    });
  }

  return (
    <span
      style={{
        borderTopLeftRadius: CARD_RADIUS,
        borderTopRightRadius: CARD_RADIUS,
        margin: "0.2em",
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
        <span
          /* eslint-disable-line react/no-danger */ dangerouslySetInnerHTML={{
            __html: card.cardHTML
          }}
        />
        {intl.formatMessage(card.color.letter)}
      </div>
      <div
        style={{
          border: "1px solid grey",
          borderBottomLeftRadius: CARD_RADIUS,
          borderBottomRightRadius: CARD_RADIUS
        }}
      >
        <ColorBar100 barNumber={MINUS_30} color={minus30color} />
        <ColorBar100 barNumber={MINUS_20} color={minus20color} />
        <ColorBar100 barNumber={MINUS_10} color={minus10color} />
      </div>
    </span>
  );
};

Card100Label.propTypes = {
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

Card100Label.defaultProps = {
  operationIds: null
};

export default injectIntl(Card100Label);
