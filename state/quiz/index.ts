import {
  initialState,
  SUBMIT_ANSWER,
  RESET,
  REQUEST_DATA_SUCCESS,
} from "./constants";

const quizReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SUBMIT_ANSWER: {
      const {
        payload: { value, index },
      } = action;
      const updatedValue = {
        ...state.data[index],
        userAnswer: value,
      };
      return {
        ...state,
        currentIdx: index + 1,
        data: state.data.map((item, i) => (index === i ? updatedValue : item)),
      };
    }

    case REQUEST_DATA_SUCCESS: {
      console.log({ action });
      const { data } = action;
      return {
        ...state,
        data,
      };
    }

    case RESET: {
      return initialState;
    }

    default:
      return state;
  }
};

export default quizReducer;
