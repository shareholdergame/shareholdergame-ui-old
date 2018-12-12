import React from "react";

import PriceOperation from "./PriceOperation";
import BigCard from "./BigCard";
import MultiplyBy2CardLabel from "./MultiplyBy2CardLabel";

export const multipleBy2CardPrefixHTML = "&times;2";

class MultiplyBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardHTML = multipleBy2CardPrefixHTML;
    this.sortOrder = 24;

    this.primaryPriceOperation = PriceOperation.getById(12); // x2

    this.priceChangeOperations = [];
    this.priceChangeOperations[this.color.index] = this.primaryPriceOperation;
  }
  getCardLabel = operationIds => (
    <MultiplyBy2CardLabel card={this} operationIds={operationIds} />
  );

  static calculatePriceChange(price) {
    return price * 2;
  }
}

export default MultiplyBy2Card;
