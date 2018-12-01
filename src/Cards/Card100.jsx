import React from "react";

import BigCard from "./BigCard";

import Card100Label from "./Card100Label";

class Card100 extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardHTML = "100";
    this.sortOrder = 25;
  }

  getCardLabel = operationIds => (
    <Card100Label card={this} operationIds={operationIds} />
  );
}

export default Card100;
