import { combineReducers } from "redux";
import { todoListSlice } from "../slices/todoListSlice";

export const rootReducer = combineReducers({
  todo: todoListSlice.reducer,
});
