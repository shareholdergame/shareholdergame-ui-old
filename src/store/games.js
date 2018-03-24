import axios from "axios";

export const SEARCHING_GAMES = "SEARCHING_GAMES";
export const GAMES_FOUND = "GAMES_FOUND";
export const LOADING_GAME_ARCHIVE = "LOADING_GAME_ARCHIVE";
export const GAME_ARCHIVE_LOADED = "GAME_ARCHIVE_LOADED";

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

export function loadArchive() {
  return dispatch => {
    dispatch({
      type: LOADING_GAME_ARCHIVE
    });

    axios
      .get("/api/mocks/game_archive.json", {
        responseType: "json"
      })
      .then(response =>
        dispatch({
          sets: response.data.result.sets,
          type: GAME_ARCHIVE_LOADED
        })
      );
  };
}

export function games(state, action) {
  if (typeof state === "undefined") {
    return {
      found_games: [],
      game_archive: [],
      loading_archive: false,
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
    case LOADING_GAME_ARCHIVE:
      return Object.assign({}, state, {
        loading_archive: true
      });
    case GAME_ARCHIVE_LOADED:
      return Object.assign({}, state, {
        game_archive: action.sets,
        loading_archive: false
      });
    default:
      return state;
  }
}
