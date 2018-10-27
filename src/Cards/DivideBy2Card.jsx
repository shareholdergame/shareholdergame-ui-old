import React from "react";

import BigCard from "./BigCard";

import DivideBy2CardLabel from "./DivideBy2CardLabel";

class DivideBy2Card extends BigCard {
  constructor(color) {
    super(color);

    this.cardLabel = <DivideBy2CardLabel card={this} />;
  }
}

export default DivideBy2Card;