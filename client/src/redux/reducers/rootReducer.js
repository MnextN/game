import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { studentsReducer } from "./studentsReducer";

export const rootReducer = combineReducers({
  usersReducer,
  studentsReducer
})