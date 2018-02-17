import user from "../user";

describe("Test user reducer", () => {
  it("should set the user status with LOGIN_USER", () => {
    let initialState = {
      isLoggedIn: false,
      user: {}
    };

    let action = {
      type: "LOGIN_USER",
      user: { username: "Alice" }
    };

    expect(user(initialState, action)).toEqual({
      isLoggedIn: true,
      user: { username: "Alice" }
    });
  });

  it("should set the user status with LOGOUT_USER", () => {
    let initialState = {
      isLoggedIn: true,
      user: { username: "Alice" }
    };

    let action = {
      type: "LOGOUT_USER"
    };

    expect(user(initialState, action)).toEqual({
      isLoggedIn: false,
      user: {}
    });
  });
});
