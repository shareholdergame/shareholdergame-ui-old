import React from "react";

import BigCard from "./BigCard";

import MultiplyBy2CardLabel from "./MultiplyBy2CardLabel";

class MultiplyBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardString = "x2";
    this.cardLabel = <MultiplyBy2CardLabel card={this} />;
    this.sortOrder = 24;
  }
}

export default MultiplyBy2Card;
