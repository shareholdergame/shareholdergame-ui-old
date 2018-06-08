export const SEND_STATUS = "SEND_STATUS";
export const RESET_STATUS = "RESET_STATUS";
export const START_PROGRESS = "START_PROGRESS";
export const INCREMENT_PROGRESS = "INCREMENT_PROGRESS";
export const SET_PROGRESS = "SET_PROGRESS";
export const RESET_PROGRESS = "RESET_PROGRESS";
export const STOP_PROGRESS = "STOP_PROGRESS";

export function sendStatus(message, timeout = 3000) {
  return dispatch => {
    dispatch({
      type: SEND_STATUS,
      message
    });

    setTimeout(() => {
      dispatch({
        type: RESET_STATUS,
        message
      });
    }, timeout);
  };
}

let interval = null;

export function stopProgress() {
  return dispatch => {
    clearInterval(interval);

    dispatch({
      type: STOP_PROGRESS
    });
  };
}

export function resetProgress() {
  return dispatch => {
    clearInterval(interval);

    dispatch({
      type: RESET_PROGRESS
    });
  };
}

export function setProgress(progress) {
  return dispatch => {
    clearInterval(interval);

    dispatch({
      type: SET_PROGRESS,
      progress
    });
  };
}
export function startProgress(tick = 1000, increment = 10) {
  return dispatch => {
    dispatch(stopProgress());

    dispatch({
      type: START_PROGRESS
    });

    interval = setInterval(() => {
      dispatch({
        type: INCREMENT_PROGRESS,
        increment
      });
    }, tick);
  };
}

export function status(state, action) {
  if (typeof state === "undefined") {
    return {
      message: null,
      progress: 0
    };
  }

  switch (action.type) {
    case SEND_STATUS:
      return Object.assign({}, state, {
        message: action.message
      });
    case RESET_STATUS:
      return state.message === action.message
        ? Object.assign({}, state, {
            message: null
          })
        : state;
    case START_PROGRESS:
      return Object.assign({}, state, {
        progress: 0
      });
    case RESET_PROGRESS:
      return Object.assign({}, state, {
        progress: 0
      });
    case INCREMENT_PROGRESS:
      return Object.assign({}, state, {
        progress:
          state.progress + action.increment >= 100
            ? 0
            : state.progress + action.increment
      });
    case SET_PROGRESS:
      return Object.assign({}, state, {
        progress: action.progress
      });
    default:
      return state;
  }
}
