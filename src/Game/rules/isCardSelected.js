class isCardSelected {
  static apply = state => {
    const updatedState = Object.assign({}, state, {
      isCardSelected: !!state.selectedCard
    });

    return { updatedState, isLastRuleApplied: !state.selectedCard };
  };
}

export default isCardSelected;
