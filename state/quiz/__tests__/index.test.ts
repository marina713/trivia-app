import * as actions from "../actions";
import reducer from "..";
import { initialState } from "../constants";
import { mockData, mockState } from "../mocks";

describe("Quiz #reducer", () => {
  describe("Returns the correct state for `submitAnswer` action", () => {
    it("when answer 0 is true", () => {
      const result = reducer(mockState.quiz, actions.submitAnswer("True", 0));
      expect(result.data[0].userAnswer).toStrictEqual("True");
      expect(result.currentIdx).toStrictEqual(1);
    });
    it("when answer 2 is false", () => {
      const result = reducer(mockState.quiz, actions.submitAnswer("False", 2));
      expect(result.data[2].userAnswer).toStrictEqual("False");
      expect(result.currentIdx).toStrictEqual(3);
    });
  });

  describe("Returns the correct state for `requestDataSuccess` action", () => {
    it("given an empty initial state", () => {
      const result = reducer(
        initialState,
        actions.requestDataSuccess(mockData)
      );
      expect(result).toStrictEqual({ ...initialState, data: mockData });
    });
  });

  describe("Returns the correct state for `reset` action", () => {
    it("given an non-empty mock state", () => {
      const result = reducer(mockState.quiz, actions.reset());
      expect(result).toStrictEqual(initialState);
    });
  });
});
