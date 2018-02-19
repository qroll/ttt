import "react-native";
import React from "react";
import { mount, shallow } from "enzyme";

import TextWrapper from "../common/TextWrapper";

describe("Test TextWrapper component", () => {
  it("renders text correctly", () => {
    const component = shallow(<TextWrapper>Hello World</TextWrapper>);
    expect(component).toMatchSnapshot();
  });

  it("returns null when child evaluates to a falsy value", () => {
    const component = shallow(<TextWrapper>{null}</TextWrapper>);
    expect(component.get(0)).toBeNull();
  });

  it("returns null when used as a self-closing tag", () => {
    const component = shallow(<TextWrapper />);
    expect(component.get(0)).toBeNull();
  });
});
