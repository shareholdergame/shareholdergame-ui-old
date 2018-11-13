import { bool, number, arrayOf, shape, func } from "prop-types";

export const CurrentTurnPropTypes = {
  previousTurns: arrayOf(shape()).isRequired,
  roundNumber: number.isRequired,
  lastRow: bool,
  turnIndex: number.isRequired,
  turnsPerRound: number.isRequired,
  outstandingCards: arrayOf(shape()).isRequired,
  onUpdateTurn: func.isRequired
};

export const CurrentTurnDefaultProps = {
  lastRow: false
};
