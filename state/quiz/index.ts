import {
  initialState,
  SET_DATA,
  SET_CURRENT_ITEM,
  SUBMIT_ANSWER,
  RESET,
} from "./constants";

const quizReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DATA: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        data: value,
      };
    }

    case SET_CURRENT_ITEM: {
      const {
        payload: { value },
      } = action;
      return {
        ...state,
        currentItem: value,
      };
    }
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
    case RESET: {
      return initialState;
    }

    default:
      return state;
  }
};

export default quizReducer;
