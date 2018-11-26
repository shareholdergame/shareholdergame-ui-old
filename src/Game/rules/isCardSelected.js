class isCardSelected {
  static apply = state => {
    const updatedState = Object.assign({}, state, {
      isCardSelected: !!state.selectedCard
    });

    return { updatedState };
  };
}

export default isCardSelected;
