import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  RequestDataPayload,
} from "./constants";

const getQuizData = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
  const json = await response.json();
  return json.results;
};

// worker Saga: will be fired on REQUEST_DATA actions
function* requestData(action: { payload: RequestDataPayload }) {
  console.log("inside fetch!", { action });
  try {
    const data = yield call(getQuizData);
    yield put({ type: REQUEST_DATA_SUCCESS, data });
    yield call(action.payload.onSuccess);
  } catch (e: any) {
    yield put({ type: "DATA_FETCH_FAILED", message: e.message });
    yield call(action.payload.onFail);
  }
}

/*
  Starts requestData on each dispatched `REQUEST_DATA` action.
*/
function* mySaga() {
  yield takeEvery(REQUEST_DATA, requestData);
}

export default mySaga;
