import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";

const userDataReducer = (state = [], action) => {
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const getUsersReducer = (state = [], action) => {
  if (action.type === "GET_USERS") {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const signInUserReducer = (state = {}, action) => {
  if (action.type === "SIGNED_USER") {
    return { ...action.payload };
  } else {
    return state;
  }
};

export default combineReducers({
  form: formReducers,
  userData: userDataReducer,
  users: getUsersReducer,
  signedInUser: signInUserReducer,
});
