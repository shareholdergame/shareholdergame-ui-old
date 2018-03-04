import axios from "axios";

export const LOAD_ACTIVITY = "LOAD_ACTIVITY";
export const ACTIVITY_LOADED = "ACTIVITY_LOADED";

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

export function home(state, action) {
  if (typeof state === "undefined") {
    return {
      activity: [],
      activity_loading: false,
      activity_initialized: false
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
    default:
      return state;
  }
}
