import {
  PASSWORD_FAILED,
  PASSWORD_REQUEST,
  PASSWORD_SUCCESS,
  CATEGORIES_FAILED,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  DELETE_PASSWORD_FAILED,
  DELETE_PASSWORD_REQUEST,
  DELETE_PASSWORD_SUCCESS,
  ADD_PASSWORD_REQUEST,
  ADD_PASSWORD_SUCCESS,
  ADD_PASSWORD_FAILED,
  SECURE_NOTE_SUCCESS,
  SECURE_NOTE_REQUEST,
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
  SINGLE_SECURE_NOTE_SUCCESS,
  SINGLE_SECURE_NOTE_REQUEST,
  SINGLE_SECURE_NOTE_FAILED,
} from "../Constants/constants";

/* SECURE NOTE REDUCERS */

export const secureNoteReducer = (state = { secureNotes: null }, action) => {
  switch (action.type) {
    case SECURE_NOTE_REQUEST:
      return { loading: true, secureNotes: null };
    case SECURE_NOTE_SUCCESS:
      return { loading: false, secureNotes: action.payload };
    case SECURE_NOTE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const singleSecureNoteReducer = (state = { secureNote: null }, action) => {
  switch (action.type) {
    case SINGLE_SECURE_NOTE_REQUEST:
      return { loading: true, secureNote: null };
    case SINGLE_SECURE_NOTE_SUCCESS:
      return { loading: false, secureNote: action.payload };
    case SINGLE_SECURE_NOTE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addSecureNoteReducer = (state = { secureNote: null }, action) => {
  switch (action.type) {
    case ADD_SECURE_NOTE_REQUEST:
      return { loading: true, secureNote: null };
    case ADD_SECURE_NOTE_SUCCESS:
      return { loading: false, secureNote: action.payload };
    case ADD_SECURE_NOTE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteSecureNoteReducer = (
  state = { secureNote: null },
  action
) => {
  switch (action.type) {
    case DELETE_SECURE_NOTE_REQUEST:
      return { loading: true, secureNote: null };
    case DELETE_SECURE_NOTE_SUCCESS:
      return { loading: false, secureNote: action.payload };
    case DELETE_SECURE_NOTE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

/* PASSWORD REDUCERS */

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

export const addPasswordReducer = (state = { password: null }, action) => {
  switch (action.type) {
    case ADD_PASSWORD_REQUEST:
      return { loading: true, password: null };
    case ADD_PASSWORD_SUCCESS:
      return { loading: false, password: action.payload };
    case ADD_PASSWORD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deletePasswordsReducer = (state = { password: null }, action) => {
  switch (action.type) {
    case DELETE_PASSWORD_REQUEST:
      return { loading: true, password: null };
    case DELETE_PASSWORD_SUCCESS:
      return { loading: false, password: action.payload };
    case DELETE_PASSWORD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

/* CATEGORIES REDUCERS */

export const categoriesReducer = (state = { categories: null }, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { loading: true, categories: null };
    case CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORIES_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addCategoriesReducer = (state = { category: null }, action) => {
  switch (action.type) {
    case ADD_CATEGORIES_REQUEST:
      return { loading: true, category: null };
    case ADD_CATEGORIES_SUCCESS:
      return { loading: false, category: action.payload };
    case ADD_CATEGORIES_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
