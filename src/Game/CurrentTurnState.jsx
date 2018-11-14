import React from "react";

import { func, shape, arrayOf, string } from "prop-types";

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
      .sharePrices.map(price => price.price);

    // store numbers as strings so they get properly compared when displaying the values
    const first = myPreviousSellStep.shares.map(share => `${share.amount}`);
    const last = first.map(amount => amount);

    const totalCapital =
      previousPrices
        .map((price, index) => first[index] * price)
        .reduce((total, stockCapital) => total + stockCapital, 0) + bank;

    this.state = {
      totalCapital,
      previousPrices,
      first,
      last,
      bank
    };
  }

  onUpdateTurn = (isFirst, colorIndex, value) => {
    const newVal = (isFirst ? this.state.first : this.state.last).slice();
    newVal[colorIndex] = `${parseInt(value, 10) || 0}`;

    const newBank =
      this.state.totalCapital -
      this.state.previousPrices
        .map((price, index) => newVal[index] * price)
        .reduce((total, stockCapital) => total + stockCapital, 0);

    if (newBank >= 0) {
      if (isFirst) {
        this.setState({ first: newVal, bank: newBank });
      } else {
        this.setState({ last: newVal, bank: newBank });
      }
    } else {
      this.setState({
        first: this.state.first,
        last: this.state.last,
        bank: this.state.bank
      });
    }
  };

  render = () => {
    const { first, last, previousPrices, bank } = this.state;

    return this.props.children({
      first,
      last,
      previousPrices,
      bank,
      onUpdateTurn: (isFirst, colorIndex, value) => {
        this.onUpdateTurn(isFirst, colorIndex, value);
      }
    });
  };
}

export default CurrentTurnState;
