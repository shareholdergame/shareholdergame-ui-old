import React from "react";

import BigCard from "./BigCard";

import BigCardLabel from "./BigCardLabel";

class DivideBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardString = ":2";
    this.cardLabel = <BigCardLabel card={this} />;
    this.sortOrder = 24;
  }
}

export default DivideBy2Card;
