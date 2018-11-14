import { shape, number, arrayOf, string, bool } from "prop-types";

import CurrentTurnStatePropTypes from "./CurrentTurnStatePropTypes";

const GameBoardPropTypes = {
  game: shape({
    rounds: arrayOf(
      shape({
        name: string,
        userpic: string,
        winner: bool,
        wonmoney: number
      })
    ).isRequired
  }).isRequired,

  ...CurrentTurnStatePropTypes
};

export default GameBoardPropTypes;
