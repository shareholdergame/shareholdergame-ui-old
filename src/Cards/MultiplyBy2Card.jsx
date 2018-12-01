import React from "react";

import BigCard from "./BigCard";

import MultiplyBy2CardLabel from "./MultiplyBy2CardLabel";

export const multipleBy2CardPrefixHTML = "&times;2";

class MultiplyBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardHTML = multipleBy2CardPrefixHTML;
    this.sortOrder = 24;
  }
  getCardLabel = operationIds => (
    <MultiplyBy2CardLabel card={this} operationIds={operationIds} />
  );
}

export default MultiplyBy2Card;
