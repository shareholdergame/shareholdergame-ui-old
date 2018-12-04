const allPriceOperations = [];

class PriceOperation {
  constructor(id, value, operation) {
    this.id = id;
    this.value = value;
    this.operation = operation;
  }

  calculatePriceChange(price) {
    return this.operation ? this.operation(price) : price + this.value;
  }

  static getById(id) {
    return allPriceOperations[id];
  }
}

allPriceOperations[1] = new PriceOperation(1, 100);
allPriceOperations[2] = new PriceOperation(2, 60);
allPriceOperations[3] = new PriceOperation(3, 50);
allPriceOperations[4] = new PriceOperation(4, 40);
allPriceOperations[5] = new PriceOperation(5, 30);
allPriceOperations[6] = new PriceOperation(6, -60);
allPriceOperations[7] = new PriceOperation(7, -50);
allPriceOperations[8] = new PriceOperation(8, -40);
allPriceOperations[9] = new PriceOperation(9, -30);
allPriceOperations[10] = new PriceOperation(10, -20);
allPriceOperations[11] = new PriceOperation(11, -10);
allPriceOperations[12] = new PriceOperation(12, null, price => price * 2);
allPriceOperations[13] = new PriceOperation(13, null, price => price / 2);

export default PriceOperation;
