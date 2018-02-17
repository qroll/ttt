import "react-native";
import React from "react";
import { mount, shallow } from "enzyme";
import { Button } from "native-base";

import User, { Login, UserProfile } from "../User";

describe("Test User component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Test Login component", () => {
  it("should log in when the button is pressed", () => {
    let onLogin = jest.fn();

    let component = shallow(
      <Login username="test" onChange={jest.fn()} onLogin={onLogin} />
    );

    let button = component.find(Button).first();
    button.simulate("press");

    expect(onLogin.mock.calls).toHaveLength(1);
  });

  it("should enable the button when the username is entered", () => {
    let component = shallow(
      <Login username="test" onChange={jest.fn()} onLogin={jest.fn()} />
    );

    let button = component.find(Button).first();

    expect(button.props().disabled).toEqual(false);
  });

  it("should disable the button when the username is not entered", () => {
    let component = shallow(
      <Login username="" onChange={jest.fn()} onLogin={jest.fn()} />
    );

    let button = component.find(Button).first();

    expect(button.props().disabled).toEqual(true);
  });
});
