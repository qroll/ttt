import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import configureStore from "../store";

import TopTopics from "../containers/TopTopicsContainer";
import Submit from "../containers/SubmitContainer";

let store = configureStore();

const RootStack = StackNavigator(
  {
    Home: {
      screen: TopTopics
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
