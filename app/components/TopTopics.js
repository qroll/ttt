import React, { Component } from "react";
import {
  Body,
  Button,
  Container,
  Content,
  Fab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from "native-base";

import Topics from "./common/Topics";

const AppBar = () => (
  <Header>
    <Left />
    <Body>
      <Title>ttt</Title>
    </Body>
  </Header>
);

const AppContent = ({ topics, onNavigate }) => (
  <Content>
    <Topics topics={topics} />
  </Content>
);

export default class TopTopics extends Component {
  componentDidMount() {
    this.props.actions.fetchTopics();
  }

  onNavigate = () => this.props.navigation.navigate("Submit");

  render() {
    return (
      <Container>
        <AppBar />
        <AppContent topics={this.props.topics} />
        <Fab active={true} onPress={this.onNavigate} position="bottomRight">
          <Icon name="share" />
        </Fab>
      </Container>
    );
  }
}
