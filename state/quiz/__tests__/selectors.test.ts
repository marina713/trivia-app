import {
  getData,
  getCurrentIdx,
  getCurrentItem,
  getScoreCorrect,
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
});
