class DealtCard {
  constructor(id, card) {
    this.id = id;
    this.card = card;
    this.priceChangeOperations = null;
  }

  setPriceChangeOperationIds(ids) {
    this.priceChangeOperations = ids;
  }
}

export default DealtCard;
