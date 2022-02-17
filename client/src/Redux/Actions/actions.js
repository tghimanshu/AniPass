import http from "../../Utils/http";
import {
  PASSWORD_FAILED,
  PASSWORD_REQUEST,
  PASSWORD_SUCCESS,
} from "../Constants/constants";

export const passwordActions = () => async (dispatch) => {
  try {
    dispatch({
      type: PASSWORD_REQUEST,
    });
    const { data } = await http.get("/passwords");
    dispatch({
      type: PASSWORD_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};
