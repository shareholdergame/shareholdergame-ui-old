import React from "react";

import SmallCardLabel from "./SmallCardLabel";
import Card from "./Card";

class SmallCard extends Card {
  constructor({ color, value }) {
    super({ color });

    this.value = value;
    this.cardString = this.value > 0 ? `+${this.value}` : this.value;

    this.oppositeValue = this.value > 0 ? this.value - 70 : 70 + this.value;
    this.oppositeString =
      this.oppositeValue > 0 ? `+${this.oppositeValue}` : this.oppositeValue;

    this.cardLabel = <SmallCardLabel card={this} />;
  }

  getSortOrder() {
    return super.getSortOrder() + this.value / 10 + 6;
  }
}

export default SmallCard;
