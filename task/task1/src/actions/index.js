import registerUser from "../apis/registerUser";
import history from "../history";

export const addUser = (formValues) => async (dispatch) => {
  const response = await registerUser.post("/users", formValues);
  dispatch({ type: "ADD_USER", payload: response.data });
  history.push("/");
};

export const getUsers = () => async (dispatch) => {
  const response = await registerUser.get("/users");
  dispatch({ type: "GET_USERS", payload: response.data });
  //history.push("/");
};

export const updateUser = (id, user) => async (dispatch) => {
  const response = await registerUser.patch(`/users/${id}`, user);
  dispatch({ type: "UPDATE_USER", payload: response.data });
};

export const signedInUser = (user) => {
  return {
    type: "SIGNED_USER",
    payload: user,
  };
};
