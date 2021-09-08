import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-action";

// const items = createReducer([], {
//   [actions.addItem]: (state, action) => [action.payload, ...state],
//   [actions.deleteItem]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

const items = createReducer([], {
  [actions.fetchContactsSucces]: (state, action) => [
    ...action.payload,
    ...state,
  ],
});

const filter = createReducer("", {
  [actions.getFilterItems]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
