import type { Data, Item } from "../../types";

export type StateProps = {
  data: Data;
  currentItem: Item | null;
  currentIdx: number;
};

export const initialState: StateProps = {
  data: [],
  currentItem: null,
  currentIdx: 0,
};

export const SET_CURRENT_ITEM = "quiz/SET_CURRENT_ITEM";
export const SET_DATA = "quiz/SET_DATA";
export const SUBMIT_ANSWER = "quiz/SUBMIT_ANSWER";
export const RESET = "quiz/RESET";
