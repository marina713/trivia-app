import { createSelector } from "reselect";
import { initialState, StateProps } from "./constants";
import { decode } from "html-entities";

const getQuiz = (state: { quiz: StateProps }) => state.quiz || initialState;

export const getData = createSelector(
  getQuiz,
  (data) => data.data || initialState.data
);
export const getCurrentIdx = createSelector(getQuiz, (data) => data.currentIdx);
export const getCurrentItem = createSelector(
  [getData, getCurrentIdx],
  (data, currentIdx) => data[currentIdx]
);
export const getScoreCorrect = createSelector(
  getQuiz,
  (data) =>
    data.data.filter((item) => item.userAnswer === item.correct_answer).length
);
export const getCurrentNormalisedQuestion = createSelector(
  [getCurrentItem],
  (data) => decode(data.question)
);
export const getCurrentNormalisedCategory = createSelector(
  [getCurrentItem],
  (data) => decode(data.category)
);
