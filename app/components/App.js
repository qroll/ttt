/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import configureStore from "../store";

import FrontPageContainer from "../containers/FrontPageContainer";
import Submit from "./Submit";

let store = configureStore();

const RootStack = StackNavigator({
  Home: {
    screen: FrontPageContainer
  },
  Submit: {
    screen: Submit
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
