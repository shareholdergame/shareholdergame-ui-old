import React from "react";

import { func, shape, arrayOf, string } from "prop-types";

import applyRules from "./rules/rules";

class CurrentTurnState extends React.Component {
  static propTypes = {
    children: func.isRequired,
    previousTurns: arrayOf(
      shape({
        steps: arrayOf(
          shape({
            stepType: string.isRequired
          })
        )
      }).isRequired
    ).isRequired
  };

  constructor(props) {
    super(props);

    const myPreviousTurn = props.previousTurns[0];
    const myPreviousSellStep = myPreviousTurn.steps.find(
      step => step.stepType === "LAST_BUY_SELL_STEP"
    );
    const { bank } = myPreviousTurn;

    const immediatelyPreviousTurn =
      props.previousTurns[props.previousTurns.length - 1];

    const previousPrices = immediatelyPreviousTurn.steps
      .find(step => step.stepType === "PRICE_CHANGE_STEP")
      .sharePrices.sort((a, b) => a.id - b.id)
      .map(price => price.price);

    // store numbers as strings so they get properly compared when displaying the values
    const previousShares = myPreviousSellStep.shares.map(
      share => `${share.amount}`
    );
    const first = previousShares.slice();
    const last = previousShares.slice();

    const totalCapital =
      previousPrices
        .map((price, index) => first[index] * price)
        .reduce((total, stockCapital) => total + stockCapital, 0) + bank;

    this.state = {
      totalCapital,
      previousShares,
      previousPrices,
      first,
      last,
      bank,
      isCardSelected: false,
      areAllPricesUpdated: false,
      isComplete: false
    };
  }

  onUpdateCard = selectedCard => {
    const newState = applyRules(this.state, {
      selectedCard
    });

    this.updateState(newState);
  };

  onUpdateStockAmount = (isFirst, colorIndex, value) => {
    let newState = false;

    if (isFirst) {
      const newFirstStocks = this.state.first.slice();
      newFirstStocks[colorIndex] = `${parseInt(value, 10) || 0}`;

      newState = applyRules(this.state, {
        first: newFirstStocks
      });
    } else {
      const newLastStocks = this.state.last.slice();
      newLastStocks[colorIndex] = `${parseInt(value, 10) || 0}`;

      newState = applyRules(this.state, {
        last: newLastStocks
      });
    }

    this.updateState(newState);
  };

  updateState = newState => {
    if (newState) {
      this.setState(newState);
    } else {
      this.setState(this.state);
    }
  };

  render = () => {
    const { first, last, previousPrices, bank } = this.state;

    return this.props.children({
      first,
      last,
      previousPrices,
      bank,
      onUpdateCard: card => {
        this.onUpdateCard(card);
      },
      onUpdateStockAmount: (isFirst, colorIndex, value) => {
        this.onUpdateStockAmount(isFirst, colorIndex, value);
      }
    });
  };
}

export default CurrentTurnState;
