import React from "react";

import BigCard from "./BigCard";

import Card100Label from "./Card100Label";

class Card100 extends BigCard {
  constructor(color) {
    super(color);

    this.cardLabel = <Card100Label card={this} />;
    this.sortOrder = 25;
  }
}

export default Card100;
