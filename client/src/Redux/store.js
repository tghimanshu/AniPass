import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  addPasswordReducer,
  addSecureNoteReducer,
  categoriesReducer,
  deletePasswordsReducer,
  deleteSecureNoteReducer,
  passwordsReducer,
  secureNoteReducer,
  singleSecureNoteReducer,
} from "./Reducers/reducers";

const reducers = combineReducers({
  passwords: passwordsReducer,
  deletedPassword: deletePasswordsReducer,
  addedPassword: addPasswordReducer,
  secureNotes: secureNoteReducer,
  secureNote: singleSecureNoteReducer,
  deletedSecureNote: deleteSecureNoteReducer,
  addedSecureNote: addSecureNoteReducer,
  categories: categoriesReducer,
});

const initialState = {};

const middlewares = [thunk];

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
