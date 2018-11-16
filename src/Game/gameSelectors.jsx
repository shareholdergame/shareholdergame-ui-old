import { createSelector } from "reselect";

import Deck from "../Cards/Deck";
import DealtCard from "../Cards/DealtCard";

const gameStepSequence = {
  PRICE_CHANGE_STEP: 0,
  FIRST_BUY_SELL_STEP: 1,
  LAST_BUY_SELL_STEP: 2,
  COMPENSATION_STEP: 3
};

const deck = new Deck();

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

        newResult.appliedCards = [];

        return newResult;
      });

      game.rounds = game.report.rounds;

      delete game.report;

      const cardMap = game.result.reduce((cards, result) => {
        const newCards = cards;

        result.playerCards.forEach(cardData => {
          newCards[cardData.id] = new DealtCard(
            cardData.id,
            deck.get(cardData.cardId)
          );
        });

        return newCards;
      }, {});

      // cloning player object and overriding their playerCards object
      game.result = game.result
        .map(player => {
          const newPlayer = { ...player };

          // override cardData structures with card objects
          newPlayer.playerCards = newPlayer.playerCards
            .map(cardData => cardMap[cardData.id])
            .sort((a, b) => b.card.getSortOrder() - a.card.getSortOrder());

          newPlayer.player = playerMap[newPlayer.playerId];

          return newPlayer;
        })
        .sort((a, b) => a.turnOrder - b.turnOrder);

      const allTurns = [];

      // sorted rounds, including 0th round (e.g. initial state)
      game.rounds = game.rounds.sort((a, b) => a.round - b.round).map(round => {
        const newRound = { ...round };

        newRound.turns = newRound.turns
          .sort((a, b) => a.turn - b.turn)
          .map(turn => {
            const newTurn = { ...turn };

            newTurn.bank = newTurn.steps
              .sort(
                (a, b) =>
                  gameStepSequence[a.stepType] - gameStepSequence[b.stepType]
              )
              .reduce((accumulator, step) => step.cashValue, 0);

            return newTurn;
          });

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

            const priceChangeStep = newTurn.steps.find(
              step => step.stepType === "PRICE_CHANGE_STEP"
            );

            if (priceChangeStep) {
              const priceChangeOperationIds = priceChangeStep.sharePrices
                .sort((a, b) => a.id - b.id)
                .map(price => price.priceOperationId);

              if (newTurn.appliedCard) {
                newTurn.appliedCard.setPriceChangeOperationIds(
                  priceChangeOperationIds
                );
                game.result[newTurn.turn - 1].appliedCards.push(
                  newTurn.appliedCard
                );
              }
            }
            return newTurn;
          });

        return newRound;
      });

      for (let i = 0; i < game.result.length; i += 1) {
        game.result[i].appliedCards = game.result[i].appliedCards.sort(
          (a, b) => b.card.getSortOrder() - a.card.getSortOrder()
        );

        game.result[i].outstandingCards = game.result[i].playerCards.filter(
          dealtCard =>
            !game.result[i].appliedCards.find(
              appliedCard => appliedCard.card.id === dealtCard.id
            )
        );
      }

      game.rounds.forEach(round => {
        const newRound = { ...round };

        newRound.visibleTurns = newRound.turns.filter(turn => turn.turn > 0);

        return newRound;
      });

      game.totalGameRounds =
        game.options.cards.major + game.options.cards.minor;

      // calculating in-progress state values
      const lastRoundPlayedNumber = game.rounds.length - 1;
      const lastRoundPlayed = game.rounds[lastRoundPlayedNumber];
      const lastTurnPlayedNumber = lastRoundPlayed.turns.length;

      const incompleteLastRound =
        lastTurnPlayedNumber < game.options.playersNumber;

      if (lastRoundPlayedNumber < game.totalGameRounds || incompleteLastRound) {
        game.progress = {
          complete: false
        };
        game.progress.turn = incompleteLastRound ? lastTurnPlayedNumber + 1 : 1;
        game.progress.round = incompleteLastRound
          ? lastRoundPlayedNumber
          : lastRoundPlayedNumber + 1;

        game.progress.previousTurns = allTurns.filter(
          otherTurn =>
            (otherTurn.round === 0 && game.progress.round === 1) ||
            (otherTurn.round === game.progress.round &&
              otherTurn.turn < game.progress.turn) ||
            (otherTurn.round === game.progress.round - 1 &&
              otherTurn.turn >= game.progress.turn)
        );

        // if current turn is not last one in the game, calculate incomplete turns
        if (
          game.progress.round !== game.totalGameRounds ||
          game.progress.turn !== game.options.playersNumber
        ) {
          game.progress.nextTurn = game.progress.turn + 1;
          game.progress.nextRound = game.progress.round;

          if (game.progress.nextTurn > game.options.playersNumber) {
            game.progress.nextTurn = 1;
            game.progress.nextRound += 1;
          }
        }
      } else {
        game.progress = { complete: true };
      }

      return game;
    }
  );
};
