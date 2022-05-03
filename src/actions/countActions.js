import { INCREASE, DECREASE } from '../constants/constants';
export const increaseHandler = (count) => (dispatch) => {
  dispatch({ type: INCREASE, payload: count + 1 });
};

export const decreaseHandler = (count) => (dispatch) => {
  dispatch({ type: DECREASE, payload: count - 1 });
};
