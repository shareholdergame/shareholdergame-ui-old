class DealtCard {
  constructor(id, card) {
    this.id = id;
    this.card = card;
    this.priceChangeOperationIds = null;
  }

  setPriceChangeOperationIds(ids) {
    this.priceChangeOperationIds = ids;
  }
}

export default DealtCard;
