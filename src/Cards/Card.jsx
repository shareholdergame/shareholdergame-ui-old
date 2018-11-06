class Card {
  constructor({ color }) {
    this.color = color;
  }

  getSortOrder() {
    return this.color.sortOrder;
  }
}

export default Card;
