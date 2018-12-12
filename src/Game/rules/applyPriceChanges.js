class applyPriceChanges {
  static apply = state => {
    let updatedState = state;

    let priceOperations = [];

    let newPrices = state.previousPrices;

    if (state.selectedCard) {
      priceOperations = state.selectedCard.card.priceChangeOperations;

      newPrices = state.previousPrices.map((oldPrice, index) => {
        const priceChangeOperation = priceOperations[index];

        let newPrice = oldPrice;

        if (priceChangeOperation) {
          newPrice = priceChangeOperation.calculatePriceChange(oldPrice);
        }

        return newPrice;
      });
    }

    updatedState = {
      ...state,
      priceOperations,
      newPrices
    };

    return { updatedState, isLastRuleApplied: !state.selectedCard };
  };
}

export default applyPriceChanges;
