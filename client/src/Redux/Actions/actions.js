import http from "../../Utils/http";
import {
  PASSWORD_FAILED,
  PASSWORD_REQUEST,
  PASSWORD_SUCCESS,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILED,
  DELETE_PASSWORD_REQUEST,
  DELETE_PASSWORD_SUCCESS,
  DELETE_PASSWORD_FAILED,
  ADD_PASSWORD_REQUEST,
  ADD_PASSWORD_SUCCESS,
  ADD_PASSWORD_FAILED,
  SECURE_NOTE_REQUEST,
  SECURE_NOTE_SUCCESS,
  SECURE_NOTE_FAILED,
  ADD_SECURE_NOTE_REQUEST,
  ADD_SECURE_NOTE_SUCCESS,
  ADD_SECURE_NOTE_FAILED,
  DELETE_SECURE_NOTE_REQUEST,
  DELETE_SECURE_NOTE_SUCCESS,
  DELETE_SECURE_NOTE_FAILED,
  ADD_CATEGORIES_REQUEST,
  ADD_CATEGORIES_SUCCESS,
  ADD_CATEGORIES_FAILED,
  SINGLE_SECURE_NOTE_FAILED,
  SINGLE_SECURE_NOTE_SUCCESS,
  SINGLE_SECURE_NOTE_REQUEST,
} from "../Constants/constants";

/* PASSWORD ACTIONS */

export const passwordActions = () => async (dispatch) => {
  try {
    dispatch({
      type: PASSWORD_REQUEST,
    });
    const { data } = await http.get(
      "/u/" + localStorage.getItem("userId") + "/passwords"
    );
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

export const addPasswordActions = (body) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PASSWORD_REQUEST,
    });
    const { data } = await http.post(
      "/u/" + localStorage.getItem("userId") + "/passwords",
      body
    );
    dispatch({
      type: ADD_PASSWORD_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: ADD_PASSWORD_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

export const deletePasswordActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_PASSWORD_REQUEST,
    });
    const { data } = await http.delete(
      "/u/" + localStorage.getItem("userId") + "/passwords/" + id
    );
    dispatch({
      type: DELETE_PASSWORD_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PASSWORD_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

/* SECURE NOTE ACTION */

export const secureNoteAction = () => async (dispatch) => {
  try {
    dispatch({
      type: SECURE_NOTE_REQUEST,
    });
    const { data } = await http.get(
      "/u/" + localStorage.getItem("userId") + "/secureNotes"
    );
    dispatch({
      type: SECURE_NOTE_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: SECURE_NOTE_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

export const getSingleSecureNoteAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_SECURE_NOTE_REQUEST,
    });
    const { data } = await http.get(
      "/u/" + localStorage.getItem("userId") + "/secureNotes/" + id
    );
    dispatch({
      type: SINGLE_SECURE_NOTE_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_SECURE_NOTE_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

export const addSecureNoteAction = (body) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_SECURE_NOTE_REQUEST,
    });
    const { data } = await http.post("/secureNotes", body);
    dispatch({
      type: ADD_SECURE_NOTE_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: ADD_SECURE_NOTE_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

export const deleteSecureNoteAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_SECURE_NOTE_REQUEST,
    });
    const { data } = await http.delete(
      "/u/" + localStorage.getItem("userId") + "/secureNotes/" + id
    );
    dispatch({
      type: DELETE_SECURE_NOTE_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SECURE_NOTE_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

/* CATEGORIES ACTION */

export const categoriesActions = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORIES_REQUEST,
    });
    const { data } = await http.get("/categories");
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

export const addCategoryAction = (body) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_CATEGORIES_REQUEST,
    });
    const { data } = await http.post("/categories", body);
    dispatch({
      type: ADD_CATEGORIES_SUCCESS,
      payload: data.body,
    });
  } catch (error) {
    dispatch({
      type: ADD_CATEGORIES_FAILED,
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};
