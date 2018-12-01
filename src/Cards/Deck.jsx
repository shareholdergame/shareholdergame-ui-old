import SmallDeck from "./SmallDeck";
import BigDeck from "./BigDeck";

class Deck {
  constructor() {
    this.small = new SmallDeck();
    this.big = new BigDeck();
  }

  get(id) {
    return this.small.get(id) || this.big.get(id);
  }
}

export default Deck;
