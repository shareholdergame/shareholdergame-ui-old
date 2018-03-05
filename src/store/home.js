import axios from "axios";

export const LOAD_ACTIVITY = "LOAD_ACTIVITY";
export const ACTIVITY_LOADED = "ACTIVITY_LOADED";

export const LOAD_PLAYERS_ONLINE = "LOAD_PLAYERS_ONLINE";
export const PLAYERS_ONLINE_LOADED = "PLAYERS_ONLINE_LOADED";

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

export function loadPlayersOnline() {
  return dispatch => {
    dispatch({
      type: LOAD_PLAYERS_ONLINE
    });

    axios
      .get("/api/mocks/players_online.json", {
        responseType: "json"
      })
      .then(response =>
        dispatch({
          players_online: response.data.result.players_online,
          type: PLAYERS_ONLINE_LOADED
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

      players_online: [],
      players_online_loading: false,
      players_online_initialized: false
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
    case LOAD_PLAYERS_ONLINE:
      return Object.assign({}, state, {
        players_online_loading: true
      });
    case PLAYERS_ONLINE_LOADED:
      return Object.assign({}, state, {
        players_online: action.players_online,
        players_online_loading: false,
        players_online_initialized: true
      });
    default:
      return state;
  }
}
