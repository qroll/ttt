export const login = username => dispatch => {
  return dispatch({
    type: "LOGIN_USER",
    user: { username }
  });
};

export const logout = () => dispatch => {
  return dispatch({
    type: "LOGOUT_USER"
  });
};
