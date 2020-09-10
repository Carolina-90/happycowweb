import { combineReducers } from "redux";

const INITIAL_STATE = {
  showModal: false,
};

const uiReducer = (oldState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...oldState, showModal: true };
    case "CLOSE_MODAL":
      return { ...oldState, showModal: false };
    default:
      return oldState;
  }
};

export default combineReducers({
  ui: uiReducer,
});
