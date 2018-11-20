import positiveBalanceAfterFirstBuySell from "./positiveBalanceAfterFirstBuySell";

const rules = [
  positiveBalanceAfterFirstBuySell
  // allPricesUpdated
];

// call this method and pass it the state and updates to make
const applyRules = (state, updates) => {
  // - apply rules in sequence
  // - stop if rule marked state as invalid
  // - stop if rule declared to be last in the chain
  //   (but still valid, e.g. incomplete card assignment)
  // - turn is not complete until one of the steps sets isComplete to true
  const resultTuple = rules.reduce(
    ({ isValid, isLastRuleApplied = false, updatedState }, rule) =>
      !isLastRuleApplied && isValid
        ? rule.apply(updatedState)
        : { isValid, isLastRuleApplied, updatedState },
    {
      isValid: true,
      isLastRuleApplied: false,
      updatedState: Object.assign({}, state, updates, {
        isBankrupt: false,
        isComplete: false
      })
    }
  );

  return resultTuple.isValid ? resultTuple.updatedState : false;
};

export default applyRules;
