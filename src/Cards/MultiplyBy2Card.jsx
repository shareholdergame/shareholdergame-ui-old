import React from "react";

import BigCard from "./BigCard";

import BigCardLabel from "./BigCardLabel";

class MultiplyBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardString = "x2";
    this.cardLabel = <BigCardLabel card={this} />;
    this.sortOrder = 24;
  }
}

export default MultiplyBy2Card;
