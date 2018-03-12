import axios from "axios";

export const SEARCHING_GAMES = "SEARCHING_GAMES";
export const GAMES_FOUND = "GAMES_FOUND";

export function performGameSearch(keyword) {
  return dispatch => {
    dispatch({
      type: SEARCHING_GAMES
    });

    axios
      .get("/api/mocks/game_search.json", {
        params: {
          q: keyword
        },
        responseType: "json"
      })
      .then(response =>
        dispatch({
          games: response.data.result.games,
          type: GAMES_FOUND
        })
      );
  };
}

export function games(state, action) {
  if (typeof state === "undefined") {
    return {
      found_games: [],
      searching: false
    };
  }

  switch (action.type) {
    case SEARCHING_GAMES:
      return Object.assign({}, state, {
        searching: true
      });
    case GAMES_FOUND:
      return Object.assign({}, state, {
        found_games: action.games,
        searching: false
      });
    default:
      return state;
  }
}
