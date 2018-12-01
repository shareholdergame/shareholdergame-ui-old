import { BLUE, RED, YELLOW, GREEN } from "./CardColor";

import Card100 from "./Card100";
import MultiplyBy2Card from "./MultiplyBy2Card";
import DivideBy2Card from "./DivideBy2Card";

class BidDeck {
  constructor() {
    this.bigCards = [];

    this.bigCards[1] = new Card100({ color: BLUE });
    this.bigCards[2] = new Card100({ color: RED });
    this.bigCards[3] = new Card100({ color: YELLOW });
    this.bigCards[4] = new Card100({ color: GREEN });

    this.bigCards[5] = new MultiplyBy2Card({ color: BLUE });
    this.bigCards[6] = new DivideBy2Card({ color: BLUE });
    this.bigCards[7] = new MultiplyBy2Card({ color: RED });
    this.bigCards[8] = new DivideBy2Card({ color: RED });
    this.bigCards[9] = new MultiplyBy2Card({ color: YELLOW });
    this.bigCards[10] = new DivideBy2Card({ color: YELLOW });
    this.bigCards[11] = new MultiplyBy2Card({ color: GREEN });
    this.bigCards[12] = new DivideBy2Card({ color: GREEN });
  }

  get(id) {
    return this.bigCards[id];
  }
}

export default BidDeck;
