import { BLUE, RED, YELLOW, GREEN } from "./CardColor";

import SmallCard from "./SmallCard";

const smallCards = [];

class SmallDeck {
  static get(id) {
    return smallCards[id];
  }
}

// +30 & -60
smallCards[13] = new SmallCard(BLUE, +30);
smallCards[14] = new SmallCard(BLUE, -60);
smallCards[15] = new SmallCard(RED, +30);
smallCards[16] = new SmallCard(RED, -60);
smallCards[17] = new SmallCard(YELLOW, +30);
smallCards[18] = new SmallCard(YELLOW, -60);
smallCards[19] = new SmallCard(GREEN, +30);
smallCards[20] = new SmallCard(GREEN, -60);

// +40 & -50
smallCards[21] = new SmallCard(BLUE, +40);
smallCards[22] = new SmallCard(BLUE, -50);
smallCards[23] = new SmallCard(RED, +40);
smallCards[24] = new SmallCard(RED, -50);
smallCards[25] = new SmallCard(YELLOW, +40);
smallCards[26] = new SmallCard(YELLOW, -50);
smallCards[27] = new SmallCard(GREEN, +40);
smallCards[28] = new SmallCard(GREEN, -50);

// +50 & -40
smallCards[29] = new SmallCard(BLUE, +50);
smallCards[30] = new SmallCard(BLUE, -40);
smallCards[31] = new SmallCard(RED, +50);
smallCards[32] = new SmallCard(RED, -40);
smallCards[33] = new SmallCard(YELLOW, +50);
smallCards[34] = new SmallCard(YELLOW, -40);
smallCards[35] = new SmallCard(GREEN, +50);
smallCards[36] = new SmallCard(GREEN, -40);

// +60 & -30
smallCards[37] = new SmallCard(BLUE, +60);
smallCards[38] = new SmallCard(BLUE, -30);
smallCards[39] = new SmallCard(RED, +60);
smallCards[40] = new SmallCard(RED, -30);
smallCards[41] = new SmallCard(YELLOW, +60);
smallCards[42] = new SmallCard(YELLOW, -30);
smallCards[43] = new SmallCard(GREEN, +60);
smallCards[44] = new SmallCard(GREEN, -30);

export default SmallDeck;
