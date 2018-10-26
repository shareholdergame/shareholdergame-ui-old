import React from "react";
import { FormattedMessage } from "react-intl";

class CardColor {
  constructor(letter, columnLabel, style) {
    this.letter = letter;
    this.columnLabel = columnLabel;
    this.style = style;
  }
}

export default CardColor;

export const BLUE = new CardColor(
  (
    <FormattedMessage
      id="card.colors.letter.blue"
      description="Card color letter for blue cards"
      defaultMessage="b"
    />
  ),
  (
    <FormattedMessage
      id="card.colors.column.blue"
      description="Card color column label for blue cards"
      defaultMessage="Blue"
    />
  ),
  "blue"
);
export const RED = new CardColor(
  (
    <FormattedMessage
      id="card.colors.letter.red"
      description="Card color letter for red cards"
      defaultMessage="Red"
    />
  ),
  (
    <FormattedMessage
      id="card.colors.column.red"
      description="Card color column label for red cards"
      defaultMessage="Red"
    />
  ),
  "red"
);
export const YELLOW = new CardColor(
  (
    <FormattedMessage
      id="card.colors.letter.yellow"
      description="Card color letter for yellow cards"
      defaultMessage="y"
    />
  ),
  (
    <FormattedMessage
      id="card.colors.column.yellow"
      description="Card color column label for yellow cards"
      defaultMessage="Yellow"
    />
  ),
  "yellow"
);
export const GREEN = new CardColor(
  (
    <FormattedMessage
      id="card.colors.letter.green"
      description="Card color letter for green cards"
      defaultMessage="g"
    />
  ),
  (
    <FormattedMessage
      id="card.colors.column.green"
      description="Card color column label for green cards"
      defaultMessage="Green"
    />
  ),
  "green"
);

export const allColors = [BLUE, RED, YELLOW, GREEN];
