import SmallDeck from "./SmallDeck";
import BigDeck from "./BigDeck";

class Deck {
  static get(id) {
    return SmallDeck.get(id) || BigDeck.get(id);
  }
}

export default Deck;
