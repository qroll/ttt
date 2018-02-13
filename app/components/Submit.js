import React, { Component } from "react";
import { Keyboard } from "react-native";
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Left,
  Right,
  Text,
  Title
} from "native-base";

const CHAR_LIMIT = 255;

const AppBar = ({ onBack }) => (
  <Header>
    <Left>
      <Button transparent onPress={onBack}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title>New</Title>
    </Body>
  </Header>
);

const AppContent = ({ title, onChange, onSubmit }) => {
  let charsRemaining = CHAR_LIMIT - title.length;
  let charsRemainingString =
    charsRemaining +
    (charsRemaining == 1 ? " character " : " characters ") +
    "remaining";
  return (
    <Content>
      <Input multiline onChangeText={onChange} value={title} autoFocus={true} />
      <Text>{charsRemainingString}</Text>
      <Button onPress={onSubmit}>
        <Text>Submit</Text>
      </Button>
    </Content>
  );
};

export default class Submit extends Component {
  state = {
    title: ""
  };

  onBack = () => {
    Keyboard.dismiss();
    this.props.navigation.goBack();
  };

  onChange = input => {
    if (input.length <= CHAR_LIMIT) {
      this.setState({ title: input });
    }
  };

  onSubmit = () => {
    Keyboard.dismiss();
    this.props.actions.submitTopic({ title: this.state.title });
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <Container>
        <AppBar onBack={this.onBack} />
        <AppContent
          title={this.state.title}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </Container>
    );
  }
}
