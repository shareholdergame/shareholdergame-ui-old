import React from "react";

import SmallCardLabel from "./SmallCardLabel";
import Card from "./Card";

class SmallCard extends Card {
  constructor(color, value) {
    super(color);

    this.value = value;
    this.cardLabel = <SmallCardLabel card={this} />;
  }
}

export default SmallCard;
