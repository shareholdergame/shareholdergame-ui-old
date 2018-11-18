import React from "react";

import BigCard from "./BigCard";

import MultiplyBy2CardLabel from "./MultiplyBy2CardLabel";

class MultiplyBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardString = "x2";
    this.sortOrder = 24;
  }
  getCardLabel = operationIds => (
    <MultiplyBy2CardLabel card={this} operationIds={operationIds} />
  );
}

export default MultiplyBy2Card;
