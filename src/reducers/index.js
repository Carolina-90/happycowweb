import { combineReducers } from "redux";

const INITIAL_STATE = {
  showModal: false,
  showSearchModal: false,
};

const uiReducer = (oldState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...oldState, showModal: true };
    case "CLOSE_MODAL":
      return { ...oldState, showModal: false };
    case "OPEN_SEARCH_MODAL":
      return { ...oldState, showSearchModal: true };
    case "CLOSE_SEARCH_MODAL":
      return { ...oldState, showSearchModal: false };
    default:
      return oldState;
  }
};

export default combineReducers({
  ui: uiReducer,
});
