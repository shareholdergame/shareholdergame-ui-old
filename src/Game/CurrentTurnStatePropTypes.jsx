import { number, arrayOf, string, func } from "prop-types";

const CurrentTurnStatePropTypes = {
  // from state component
  first: arrayOf(string).isRequired,
  last: arrayOf(string).isRequired,
  previousPrices: arrayOf(number).isRequired,
  bank: number.isRequired,
  onUpdateTurn: func.isRequired
};

export default CurrentTurnStatePropTypes;
