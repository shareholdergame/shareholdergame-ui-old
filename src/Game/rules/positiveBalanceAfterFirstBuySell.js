class positiveBalanceAfterFirstBuySell {
  static apply = state => {
    const newBank =
      state.totalCapital -
      state.previousPrices
        .map((price, index) => state.first[index] * price)
        .reduce((total, stockCapital) => total + stockCapital, 0);

    const updatedState = Object.assign({}, state, { bank: newBank });

    return { isValid: newBank >= 0, updatedState };
  };
}

export default positiveBalanceAfterFirstBuySell;
