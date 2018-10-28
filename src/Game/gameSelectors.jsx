import { createSelector } from "reselect";

export const makeGetGameSet = () =>
  createSelector(
    [state => state.games.sets, (state, props) => props.match.params.setSlug],
    (sets, slug) => sets.find(set => `${set.gameSetId}` === slug)
  );

export const makeGetGame = () => {
  const getGameSet = makeGetGameSet();

  return createSelector(
    [getGameSet, (state, props) => props.match.params.gameLetter],
    (gameSet, letter) =>
      gameSet.games &&
      gameSet.games.find(gameInSet => gameInSet.letter === letter)
  );
};
