import React from "react";

import PriceOperation from "./PriceOperation";
import BigCard from "./BigCard";
import DivideBy2CardLabel from "./DivideBy2CardLabel";

export const divideBy2CardPrefixHTML = "&divide;2";

class DivideBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardHTML = divideBy2CardPrefixHTML;
    this.sortOrder = 24;

    this.primaryPriceOperation = PriceOperation.getById(13); // /2

    this.priceChangeOperations = [];
    this.priceChangeOperations[this.color.index] = this.primaryPriceOperation;
  }

  getCardLabel = operationIds => (
    <DivideBy2CardLabel card={this} operationIds={operationIds} />
  );

  static calculatePriceChange(price) {
    return price / 2;
  }
}

export default DivideBy2Card;
