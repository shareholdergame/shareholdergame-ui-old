import axios from "axios";

export const LOAD_SELF = "LOAD_SELF";
export const SELF_LOADED = "SELF_LOADED";

export function loadSelf() {
  return dispatch => {
    dispatch({
      type: LOAD_SELF
    });

    axios
      .get("/api/mocks/self.json", {
        responseType: "json"
      })
      .then(response =>
        dispatch({
          self: response.data.result.self,
          type: SELF_LOADED
        })
      );
  };
}

export function self(state, action) {
  if (typeof state === "undefined") {
    return {
      self: null,
      self_loading: false,
      self_initialized: false
    };
  }

  switch (action.type) {
    case LOAD_SELF:
      return Object.assign({}, state, {
        self_loading: true
      });
    case SELF_LOADED:
      return Object.assign({}, state, {
        self: action.self,
        self_loading: false,
        self_initialized: true
      });
    default:
      return state;
  }
}
