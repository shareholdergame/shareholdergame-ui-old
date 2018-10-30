import { createSelector } from "reselect";

import Deck from "../Cards/Deck";
import DealtCard from "../Cards/DealtCard";

export const makeGetGameSet = () =>
  createSelector(
    [state => state.games.sets, (state, props) => props.match.params.setSlug],
    (sets, slug) => sets.find(set => `${set.gameSetId}` === slug)
  );

export const makeGetGame = () => {
  const getGameSet = makeGetGameSet();

  return createSelector(
    [getGameSet, (state, props) => props.match.params.gameLetter],
    (gameSet, letter) => {
      if (!gameSet.games) {
        return null;
      }

      const playerMap = gameSet.players.reduce((players, player) => {
        const newPlayers = players;
        newPlayers[player.id] = player;

        return newPlayers;
      }, {});

      console.log(playerMap);

      const game = {
        ...gameSet.games.find(gameInSet => gameInSet.letter === letter)
      };

      game.result = game.result.map(result => {
        const newResult = { ...result };
        newResult.player = playerMap[newResult.playerId];
        return newResult;
      });

      const cardMap = game.report.players.reduce((cards, player) => {
        const newCards = cards;

        player.playerCards.forEach(cardData => {
          newCards[cardData.id] = new DealtCard(
            cardData.id,
            Deck.get(cardData.cardId)
          );
        });

        return newCards;
      }, {});

      // cloning user object and overriding their playerCards object
      game.report.players = game.report.players.map(player => {
        const newPlayer = { ...player };

        // override cardData structures with card objects
        newPlayer.playerCards = newPlayer.playerCards.map(
          cardData => cardMap[cardData.id]
        );

        return newPlayer;
      });

      const allTurns = [];

      // sorted rounds, including 0th round (e.g. initial state)
      game.report.rounds = game.report.rounds
        .sort((a, b) => a.round - b.round)
        .map(round => {
          const newRound = { ...round };

          newRound.turns = newRound.turns.sort((a, b) => a.turn - b.turn);
          newRound.turns.forEach(turn => {
            // assemble collection of turns made so far
            allTurns.push(turn);
          });

          newRound.visibleTurns = newRound.turns
            .filter(turn => turn.turn > 0)
            .map(turn => {
              const newTurn = { ...turn };

              newTurn.previousTurns = allTurns.filter(
                otherTurn =>
                  (otherTurn.round === 0 && turn.round === 1) ||
                  (otherTurn.round === turn.round &&
                    otherTurn.turn < turn.turn) ||
                  (otherTurn.round === turn.round - 1 &&
                    otherTurn.turn >= turn.turn)
              );

              newTurn.appliedCard = cardMap[newTurn.appliedCardId];

              return newTurn;
            });

          return newRound;
        });

      game.report.rounds.forEach(round => {
        const newRound = { ...round };

        newRound.visibleTurns = newRound.turns.filter(turn => turn.turn > 0);

        return newRound;
      });

      return game;
    }
  );
};
