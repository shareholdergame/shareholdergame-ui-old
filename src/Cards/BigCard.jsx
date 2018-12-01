import Card from "./Card";

class BigCard extends Card {
  getSortOrder() {
    return super.getSortOrder() + this.sortOrder;
  }
}

export default BigCard;
