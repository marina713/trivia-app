import { Data } from "../../types";

export type StateProps = {
  data: Data;
  currentIdx: number;
};

export type RequestDataPayload = {
  onSuccess: () => void;
  onFail: () => void;
};

export const initialState: StateProps = {
  data: [],
  currentIdx: 0,
};

export const SUBMIT_ANSWER = "quiz/SUBMIT_ANSWER";
export const RESET = "quiz/RESET";
export const REQUEST_DATA = "REQUEST_DATA";
export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS";
