import axios from "axios";

export const LOAD_ACTIVITY = "LOAD_ACTIVITY";
export const ACTIVITY_LOADED = "ACTIVITY_LOADED";

export const LOAD_PLAYERS = "LOAD_PLAYERS";
export const PLAYERS_LOADED = "PLAYERS_LOADED";

export function loadActivity() {
  return dispatch => {
    dispatch({
      type: LOAD_ACTIVITY
    });

    axios
      .get("/api/mocks/activity.json", {
        responseType: "json"
      })
      .then(response =>
        dispatch({
          activity: response.data.result.activity,
          type: ACTIVITY_LOADED
        })
      );
  };
}

export function loadPlayers() {
  return dispatch => {
    dispatch({
      type: LOAD_PLAYERS
    });

    axios
      .get("/api/mocks/players.json", {
        responseType: "json"
      })
      .then(response =>
        dispatch({
          players: response.data.result.players,
          type: PLAYERS_LOADED
        })
      );
  };
}

export function home(state, action) {
  if (typeof state === "undefined") {
    return {
      activity: [],
      activity_loading: false,
      activity_initialized: false,

      players: [],
      players_loading: false,
      players_initialized: false
    };
  }

  switch (action.type) {
    case LOAD_ACTIVITY:
      return Object.assign({}, state, {
        activity_loading: true
      });
    case ACTIVITY_LOADED:
      return Object.assign({}, state, {
        activity: action.activity,
        activity_loading: false,
        activity_initialized: true
      });
    case LOAD_PLAYERS:
      return Object.assign({}, state, {
        players_loading: true
      });
    case PLAYERS_LOADED:
      return Object.assign({}, state, {
        players: action.players,
        players_loading: false,
        players_initialized: true
      });
    default:
      return state;
  }
}
