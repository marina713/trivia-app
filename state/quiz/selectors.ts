import { createSelector } from "reselect";
import { initialState, StateProps } from "./constants";

const getQuiz = (state: { quiz: StateProps }) => state.quiz || initialState;

export const getData = createSelector(
  getQuiz,
  (data) => data.data || initialState.data
);

export const getCurrentItem = createSelector(
  getQuiz,
  (data) => data.currentItem
);

export const getCurrentIdx = createSelector(getQuiz, (data) => data.currentIdx);
export const getScoreCorrect = createSelector(
  getQuiz,
  (data) =>
    data.data.filter((item) => item.userAnswer === item.correct_answer).length
);