import React from "react";

import PriceOperation from "./PriceOperation";
import SmallCardLabel from "./SmallCardLabel";
import Card from "./Card";

const positiveOperationIds = [];
positiveOperationIds[60] = 2;
positiveOperationIds[50] = 3;
positiveOperationIds[40] = 4;
positiveOperationIds[30] = 5;

const negativeOperationIds = [];
negativeOperationIds[60] = 6;
negativeOperationIds[50] = 7;
negativeOperationIds[40] = 8;
negativeOperationIds[30] = 9;

class SmallCard extends Card {
  constructor({ color, value }) {
    super({ color });

    this.value = value;
    this.cardHTML = this.value > 0 ? `+${this.value}` : `${this.value}`;

    this.oppositeValue = this.value > 0 ? this.value - 70 : 70 + this.value;
    this.oppositeHTML =
      this.oppositeValue > 0
        ? `+${this.oppositeValue}`
        : `${this.oppositeValue}`;

    const primaryOperationId =
      this.value > 0
        ? positiveOperationIds[this.value]
        : negativeOperationIds[-this.value];
    this.primaryPriceOperation = PriceOperation.getById(primaryOperationId);

    this.priceChangeOperations = [];
    this.priceChangeOperations[this.color.index] = this.primaryPriceOperation;
  }

  getCardLabel = operationIds => (
    <SmallCardLabel card={this} operationIds={operationIds} />
  );

  getSortOrder() {
    return super.getSortOrder() + this.value / 10 + 6;
  }

  static calculatePriceChange(price) {
    return price + this.value;
  }
}

export default SmallCard;
