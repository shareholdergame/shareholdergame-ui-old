class isCardSelected {
  static apply = state => ({
    updatedState: state,
    isLastRuleApplied: !state.selectedCard
  });
}

export default isCardSelected;
