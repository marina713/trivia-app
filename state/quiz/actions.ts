import {
  SUBMIT_ANSWER,
  RESET,
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  RequestDataPayload,
} from "./constants";
import { Data } from "../../types";

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

export const requestData = (payload: RequestDataPayload) => {
  return {
    type: REQUEST_DATA,
    payload,
  };
};

export const requestDataSuccess: any = (value: Data) => {
  return {
    type: REQUEST_DATA_SUCCESS,
    payload: { value },
  };
};
