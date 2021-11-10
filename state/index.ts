import { combineReducers } from "redux";
import quizReducer from "./quiz";

const rootReducers = combineReducers({
  quiz: quizReducer,
});

export default rootReducers;
