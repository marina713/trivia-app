import { SET_CURRENT_ITEM, SET_DATA, SUBMIT_ANSWER, RESET } from "./constants";
import type { Data, Item } from "../../types";

export const setCurrentItem = (value: Item) => {
  return {
    type: SET_CURRENT_ITEM,
    payload: { value },
  };
};

export const setData = (value: Data) => {
  return {
    type: SET_DATA,
    payload: { value },
  };
};

export const submitAnswer = (value: string, index: number) => {
  return {
    type: SUBMIT_ANSWER,
    payload: { value, index },
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
