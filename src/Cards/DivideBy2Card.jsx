import React from "react";

import BigCard from "./BigCard";

import DivideBy2CardLabel from "./DivideBy2CardLabel";

export const divideBy2CardPrefixHTML = "&divide;2";

class DivideBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardHTML = divideBy2CardPrefixHTML;
    this.sortOrder = 24;
  }

  getCardLabel = operationIds => (
    <DivideBy2CardLabel card={this} operationIds={operationIds} />
  );
}

export default DivideBy2Card;
