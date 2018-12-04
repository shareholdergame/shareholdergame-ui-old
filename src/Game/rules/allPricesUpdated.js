class allPricesUpdated {
  static apply = state => ({
    // hard code until we have UI for setting prices
    updatedState: { ...state, areAllPricesUpdated: false },
    isLastRuleApplied: true
  });
}

export default allPricesUpdated;
