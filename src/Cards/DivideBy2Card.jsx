import React from "react";

import BigCard from "./BigCard";

import DivideBy2CardLabel from "./DivideBy2CardLabel";

class DivideBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardString = ":2";
    this.sortOrder = 24;
  }

  getCardLabel = operationIds => (
    <DivideBy2CardLabel card={this} operationIds={operationIds} />
  );
}

export default DivideBy2Card;
