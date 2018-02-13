import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import configureStore from "../store";

let store = configureStore();

export default class FrontPage extends Component {
  render() {
    let { topics } = this.props;
    return (
      <View style={styles.container}>
        <Text>Submit</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
