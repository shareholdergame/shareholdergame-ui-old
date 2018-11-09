import React from "react";

import BigCard from "./BigCard";

import DivideBy2CardLabel from "./DivideBy2CardLabel";

class DivideBy2Card extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardString = ":2";
    this.cardLabel = <DivideBy2CardLabel card={this} />;
    this.sortOrder = 24;
  }
}

export default DivideBy2Card;
