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
} from "./Reducers/reducers";

const reducers = combineReducers({
  passwords: passwordsReducer,
  deletedPassword: deletePasswordsReducer,
  addedPassword: addPasswordReducer,
  secureNotes: secureNoteReducer,
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
