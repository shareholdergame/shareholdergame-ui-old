import { bool, shape, number, arrayOf, string, func } from "prop-types";

const CurrentTurnStatePropTypes = {
  // from state component
  first: arrayOf(string).isRequired,
  selectedCard: shape(),
  priceOperations: arrayOf(shape()),
  last: arrayOf(string).isRequired,
  previousPrices: arrayOf(number).isRequired,
  newPrices: arrayOf(number).isRequired,
  areAllPricesUpdated: bool.isRequired,
  bank: number.isRequired,
  onUpdateStockAmount: func.isRequired,
  onUpdateCard: func.isRequired
};

export default CurrentTurnStatePropTypes;
