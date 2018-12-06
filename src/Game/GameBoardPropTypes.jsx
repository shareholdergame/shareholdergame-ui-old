import { shape, number, arrayOf, string, bool } from "prop-types";

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
  }).isRequired
};

export default GameBoardPropTypes;
