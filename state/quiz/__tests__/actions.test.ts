import configureStore from "redux-mock-store";
import {
  SUBMIT_ANSWER,
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
} from "../constants";

import * as actions from "../actions";
import { mockData } from "../mocks";

const mockStore = configureStore();
const store = mockStore();

const defaultParams = {
  error: undefined,
  meta: undefined,
  payload: undefined,
};

describe("Quiz actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("submitAnswer", () => {
    test("dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: SUBMIT_ANSWER,
          payload: { value: "True", index: 0 },
        },
      ];

      store.dispatch(actions.submitAnswer("True", 0));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("requestData", () => {
    test("dispatches the correct action and payload", () => {
      const onSuccess = () => {};
      const onFail = () => {};
      const expectedActions = [
        {
          ...defaultParams,
          type: REQUEST_DATA,
          payload: { onSuccess, onFail },
        },
      ];

      store.dispatch(actions.requestData({ onSuccess, onFail }));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("requestDataSuccess", () => {
    test("dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: REQUEST_DATA_SUCCESS,
          payload: { value: mockData },
        },
      ];

      store.dispatch(actions.requestDataSuccess(mockData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
