import { allColors } from "./CardColor";

const cardsCatalog = [];

class SmallCard {
  constructor(color, value) {
    this.color = color;
    this.value = value;
  }

  static get(id) {
    return cardsCatalog[id];
  }
}

let idCounter = 1;

allColors.forEach(color => {
  for (let value = 30; value <= 60; value += 10) {
    cardsCatalog[(idCounter += 1)] = new SmallCard(color, value);
    cardsCatalog[(idCounter += 1)] = new SmallCard(color, -1 * value);
  }
});

export default SmallCard;
