export const CARD_RADIUS = "0.3em";
class Card {
  constructor({ color }) {
    this.color = color;
  }

  getSortOrder() {
    return this.color.sortOrder;
  }
}

export default Card;
