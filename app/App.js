import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import configureStore from "./store";

import Home from "./containers/HomeContainer";
import Submit from "./containers/SubmitContainer";

let store = configureStore();

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Submit: {
      screen: Submit
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      header: null
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
