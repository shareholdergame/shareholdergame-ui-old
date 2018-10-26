import { BLUE, RED, YELLOW, GREEN } from "./CardColor";

import Card100 from "./Card100";
import MultiplyBy2Card from "./MultiplyBy2Card";
import DivideBy2Card from "./DivideBy2Card";

const bigCards = [];

bigCards[1] = new Card100(BLUE);
bigCards[2] = new Card100(RED);
bigCards[3] = new Card100(YELLOW);
bigCards[4] = new Card100(GREEN);

bigCards[5] = new MultiplyBy2Card(BLUE);
bigCards[6] = new DivideBy2Card(BLUE);
bigCards[7] = new MultiplyBy2Card(RED);
bigCards[8] = new DivideBy2Card(RED);
bigCards[9] = new MultiplyBy2Card(YELLOW);
bigCards[10] = new DivideBy2Card(YELLOW);
bigCards[11] = new MultiplyBy2Card(GREEN);
bigCards[12] = new DivideBy2Card(GREEN);

class BidDeck {
  static get(id) {
    return bigCards[id];
  }
}

export default BidDeck;
