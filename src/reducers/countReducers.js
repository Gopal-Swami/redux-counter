import { INCREASE, DECREASE } from '../constants/constants';

export const countHandleReducer = (state = {}, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: action.payload };
    case DECREASE:
      return { count: action.payload };
    default:
      return state;
  }
};
