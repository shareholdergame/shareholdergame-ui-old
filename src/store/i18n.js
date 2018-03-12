export const SET_LANGUAGE = "SET_LANGUAGE";

export function setLanguage(langauge) {
  return dispatch => {
    dispatch({
      type: SET_LANGUAGE,
      language: langauge
    });
  };
}

export function i18n(state, action) {
  if (typeof state === "undefined") {
    return {
      language: "en_US"
    };
  }

  switch (action.type) {
    case SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language
      });
    default:
      return state;
  }
}
