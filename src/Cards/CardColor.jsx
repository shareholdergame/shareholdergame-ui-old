import { defineMessages } from "react-intl";

class CardColor {
  constructor(letter, columnLabel, style, index) {
    this.letter = letter;
    this.columnLabel = columnLabel;
    this.style = style;
    this.index = index;
    this.sortOrder = 400 - 100 * index;
  }
}

export default CardColor;

const colorLetters = defineMessages({
  blue: {
    id: "card.colors.letter.blue",
    description: "Card color letter for blue cards",
    defaultMessage: "b"
  },
  red: {
    id: "card.colors.letter.red",
    description: "Card color letter for red cards",
    defaultMessage: "r"
  },
  yellow: {
    id: "card.colors.letter.yellow",
    description: "Card, color letter for yellow cards",
    defaultMessage: "y"
  },
  green: {
    id: "card.colors.letter.green",
    description: "Card color letter for green cards",
    defaultMessage: "g"
  },
  unknown: {
    id: "card.colors.letter.unknown",
    description: "Card color letter for unknown color cards",
    defaultMessage: "?"
  }
});

const colorColumnLabels = defineMessages({
  blue: {
    id: "card.colors.column.blue",
    description: "Card color column label for blue cards",
    defaultMessage: "Blue"
  },
  red: {
    id: "card.colors.column.red",
    description: "Card color column label for red cards",
    defaultMessage: "Red"
  },
  yellow: {
    id: "card.colors.column.yellow",
    description: "Card, color column label for yellow cards",
    defaultMessage: "Yellow"
  },
  green: {
    id: "card.colors.column.green",
    description: "Card color column label for green cards",
    defaultMessage: "Green"
  },
  unknown: {
    id: "card.colors.column.unknown",
    description:
      "Card color column label for unknown color cards (not really used)",
    defaultMessage: "Unknown"
  }
});

export const BLUE = new CardColor(
  colorLetters.blue,
  colorColumnLabels.blue,
  "blue",
  0
);
export const RED = new CardColor(
  colorLetters.red,
  colorColumnLabels.red,
  "red",
  1
);
export const YELLOW = new CardColor(
  colorLetters.yellow,
  colorColumnLabels.yellow,
  "yellow",
  2
);

export const GREEN = new CardColor(
  colorLetters.green,
  colorColumnLabels.green,
  "green",
  3
);

export const UNKNOWN = new CardColor(
  colorLetters.unknown,
  colorColumnLabels.unknown,
  "silver",
  4
);

export const allColors = [BLUE, RED, YELLOW, GREEN];
