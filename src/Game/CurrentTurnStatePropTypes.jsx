import { bool, number, arrayOf, string, func } from "prop-types";

const CurrentTurnStatePropTypes = {
  // from state component
  first: arrayOf(string).isRequired,
  isCardSelected: bool.isRequired,
  last: arrayOf(string).isRequired,
  previousPrices: arrayOf(number).isRequired,
  bank: number.isRequired,
  onUpdateStockAmount: func.isRequired,
  onUpdateCard: func.isRequired
};

export default CurrentTurnStatePropTypes;
