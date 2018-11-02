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
        return { loading: true, letter };
      }

      const playerMap = gameSet.players.reduce((players, player) => {
        const newPlayers = players;
        newPlayers[player.id] = player;

        return newPlayers;
      }, {});

      // move some gameSet-only properties down to game so it can be self-sufficient
      const game = {
        ...gameSet.games.find(gameInSet => gameInSet.letter === letter),
        options: gameSet.options,
        gameSetId: gameSet.gameSetId,
        loading: false,
        letter
      };

      game.result = game.result.map(result => {
        const newResult = { ...result };
        newResult.player = playerMap[newResult.playerId];

        newResult.playerCards = game.report.players.find(
          player => player.playerId === newResult.playerId
        ).playerCards;

        return newResult;
      });

      game.rounds = game.report.rounds;

      delete game.report;

      const cardMap = game.result.reduce((cards, result) => {
        const newCards = cards;

        result.playerCards.forEach(cardData => {
          newCards[cardData.id] = new DealtCard(
            cardData.id,
            Deck.get(cardData.cardId)
          );
        });

        return newCards;
      }, {});

      // cloning user object and overriding their playerCards object
      game.result = game.result.map(player => {
        const newPlayer = { ...player };

        // override cardData structures with card objects
        newPlayer.playerCards = newPlayer.playerCards
          .map(cardData => cardMap[cardData.id])
          .sort((a, b) => b.card.getSortOrder() - a.card.getSortOrder());

        newPlayer.player = playerMap[newPlayer.playerId];

        return newPlayer;
      });

      const allTurns = [];

      // sorted rounds, including 0th round (e.g. initial state)
      game.rounds = game.rounds.sort((a, b) => a.round - b.round).map(round => {
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

      game.rounds.forEach(round => {
        const newRound = { ...round };

        newRound.visibleTurns = newRound.turns.filter(turn => turn.turn > 0);

        return newRound;
      });

      const totalGameRounds =
        game.options.cards.major + game.options.cards.minor;

      const lastRoundPlayedNumber = game.rounds.length - 1;
      const lastRoundPlayed = game.rounds[lastRoundPlayedNumber];
      const lastTurnPlayedNumber = lastRoundPlayed.turns.length;

      const incompleteLastRound =
        lastTurnPlayedNumber < game.options.playersNumber;

      if (lastRoundPlayedNumber < totalGameRounds || incompleteLastRound) {
        const currentTurnNumber = incompleteLastRound
          ? lastTurnPlayedNumber + 1
          : 1;
        const currentRoundNumber = incompleteLastRound
          ? lastRoundPlayedNumber
          : lastRoundPlayedNumber + 1;

        game.progress = {
          complete: false,
          round: currentRoundNumber,
          turn: currentTurnNumber
        };
      } else {
        game.progress = { complete: true };
      }

      return game;
    }
  );
};
