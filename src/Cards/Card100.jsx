import React from "react";

import BigCard from "./BigCard";

import BigCardLabel from "./BigCardLabel";

class Card100 extends BigCard {
  constructor({ color }) {
    super({ color });

    this.cardString = "100";
    this.cardLabel = <BigCardLabel card={this} />;
    this.sortOrder = 25;
  }
}

export default Card100;
