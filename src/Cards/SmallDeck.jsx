import { BLUE, RED, YELLOW, GREEN } from "./CardColor";

import SmallCard from "./SmallCard";

class SmallDeck {
  constructor() {
    this.smallCards = [];
    // +30 & -60
    this.smallCards[13] = new SmallCard({ color: BLUE, value: +30 });
    this.smallCards[14] = new SmallCard({ color: BLUE, value: -60 });
    this.smallCards[15] = new SmallCard({ color: RED, value: +30 });
    this.smallCards[16] = new SmallCard({ color: RED, value: -60 });
    this.smallCards[17] = new SmallCard({ color: YELLOW, value: +30 });
    this.smallCards[18] = new SmallCard({ color: YELLOW, value: -60 });
    this.smallCards[19] = new SmallCard({ color: GREEN, value: +30 });
    this.smallCards[20] = new SmallCard({ color: GREEN, value: -60 });

    // +40 & -50
    this.smallCards[21] = new SmallCard({ color: BLUE, value: +40 });
    this.smallCards[22] = new SmallCard({ color: BLUE, value: -50 });
    this.smallCards[23] = new SmallCard({ color: RED, value: +40 });
    this.smallCards[24] = new SmallCard({ color: RED, value: -50 });
    this.smallCards[25] = new SmallCard({ color: YELLOW, value: +40 });
    this.smallCards[26] = new SmallCard({ color: YELLOW, value: -50 });
    this.smallCards[27] = new SmallCard({ color: GREEN, value: +40 });
    this.smallCards[28] = new SmallCard({ color: GREEN, value: -50 });

    // +50 & -40
    this.smallCards[29] = new SmallCard({ color: BLUE, value: +50 });
    this.smallCards[30] = new SmallCard({ color: BLUE, value: -40 });
    this.smallCards[31] = new SmallCard({ color: RED, value: +50 });
    this.smallCards[32] = new SmallCard({ color: RED, value: -40 });
    this.smallCards[33] = new SmallCard({ color: YELLOW, value: +50 });
    this.smallCards[34] = new SmallCard({ color: YELLOW, value: -40 });
    this.smallCards[35] = new SmallCard({ color: GREEN, value: +50 });
    this.smallCards[36] = new SmallCard({ color: GREEN, value: -40 });

    // +60 & -30
    this.smallCards[37] = new SmallCard({ color: BLUE, value: +60 });
    this.smallCards[38] = new SmallCard({ color: BLUE, value: -30 });
    this.smallCards[39] = new SmallCard({ color: RED, value: +60 });
    this.smallCards[40] = new SmallCard({ color: RED, value: -30 });
    this.smallCards[41] = new SmallCard({ color: YELLOW, value: +60 });
    this.smallCards[42] = new SmallCard({ color: YELLOW, value: -30 });
    this.smallCards[43] = new SmallCard({ color: GREEN, value: +60 });
    this.smallCards[44] = new SmallCard({ color: GREEN, value: -30 });
  }

  get(id) {
    return this.smallCards[id];
  }
}

export default SmallDeck;
