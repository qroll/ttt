import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import configureStore from "../store";

let store = configureStore();

export default class FrontPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate("Submit")}
        />
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
