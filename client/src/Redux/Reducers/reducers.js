import {
  PASSWORD_FAILED,
  PASSWORD_REQUEST,
  PASSWORD_SUCCESS,
} from "../Constants/constants";

export const passwordsReducer = (state = { passwords: null }, action) => {
  switch (action.type) {
    case PASSWORD_REQUEST:
      return { loading: true, passwords: null };
    case PASSWORD_SUCCESS:
      return { loading: false, passwords: action.payload };
    case PASSWORD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
