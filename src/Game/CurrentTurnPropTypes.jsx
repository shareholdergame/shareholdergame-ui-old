import { bool, number, arrayOf, shape } from "prop-types";

import CurrentTurnStatePropTypes from "./CurrentTurnStatePropTypes";

export const CurrentTurnPropTypes = {
  ...CurrentTurnStatePropTypes,

  // from board
  roundNumber: number.isRequired,
  lastRow: bool,
  turnIndex: number.isRequired,
  turnsPerRound: number.isRequired,
  outstandingCards: arrayOf(shape()).isRequired
};

export const CurrentTurnDefaultProps = {
  lastRow: false
};
