const initialState = {
  isLoggedIn: false,
  user: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, isLoggedIn: true, user: action.user };
    case "LOGOUT_USER":
      return { ...state, isLoggedIn: false, user: {} };
    default:
      return state;
  }
};

export default user;
