import { decode } from "html-entities";
import {
  getData,
  getCurrentIdx,
  getCurrentItem,
  getScoreCorrect,
  getCurrentNormalisedQuestion,
  getCurrentNormalisedCategory,
} from "../selectors";
import { mockState, mockData } from "../mocks";

describe("Quiz Selectors", () => {
  it("should return correct value of getCurrentIdx", () => {
    const selected = getCurrentIdx.resultFunc(mockState.quiz);
    expect(selected).toEqual(mockState.quiz.currentIdx);
  });
  it("should return correct value of getData", () => {
    const selected = getData.resultFunc(mockState.quiz);
    expect(selected).toEqual(mockData);
  });
  it("should return correct value of getScoreCorrect", () => {
    const selected = getScoreCorrect.resultFunc(mockState.quiz);
    expect(selected).toEqual(1);
  });
  it("should return correct value of getCurrentItem", () => {
    const selected = getCurrentItem.resultFunc(
      mockData,
      mockState.quiz.currentIdx
    );
    expect(selected).toEqual(mockData[mockState.quiz.currentIdx]);
  });
  it("should return correct value of getCurrentNormalisedQuestion", () => {
    const selected = getCurrentNormalisedQuestion.resultFunc(mockData[0]);
    expect(selected).toEqual(decode(mockData[0].question));
  });
  it("should return correct value of getCurrentNormalisedCategory", () => {
    const selected = getCurrentNormalisedCategory.resultFunc(mockData[0]);
    expect(selected).toEqual(decode(mockData[0].category));
  });
});
