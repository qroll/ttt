import React, { Component } from "react";
import { View } from "react-native";
import {
  Body,
  Button,
  Container,
  Content,
  Drawer,
  Fab,
  Header,
  Icon,
  Left,
  Right,
  Tab,
  Tabs,
  Text,
  Title,
  TabHeading
} from "native-base";

import User from "../containers/UserContainer";
import TopTopics from "../containers/TopTopicsContainer";
import AllTopics from "../containers/AllTopicsContainer";

const AppBar = ({ onRefresh, onDrawerOpen }) => (
  <Header hasTabs>
    <Left style={{ flex: 1 }}>
      <Button transparent onPress={onDrawerOpen}>
        <Icon name="person" />
      </Button>
    </Left>
    <Body style={{ flex: 1, alignItems: "center" }}>
      <Title>ttt</Title>
    </Body>
    <Right style={{ flex: 1 }}>
      <Button transparent onPress={onRefresh}>
        <Icon name="refresh" />
      </Button>
    </Right>
  </Header>
);

const AppContent = () => (
  <Tabs>
    <Tab heading="Top">
      <Content>
        <TopTopics />
      </Content>
    </Tab>
    <Tab heading="All">
      <Content>
        <AllTopics />
      </Content>
    </Tab>
  </Tabs>
);

const Sidebar = () => (
  <View style={{ flex: 1, backgroundColor: "#fff" }}>
    <User />
  </View>
);

export default class Home extends Component {
  onNavigate = () => this.props.navigation.navigate("Submit");

  onRefresh = () => this.props.actions.fetchTopics();

  openDrawer = () => {
    this.drawer._root.open();
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  render() {
    return (
      <Container>
        <AppBar onRefresh={this.onRefresh} onDrawerOpen={this.openDrawer} />
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<Sidebar />}
          onClose={this.closeDrawer}
          panOpenMask={0.25}
        >
          <AppContent />
          <Fab onPress={this.onNavigate} position="bottomRight">
            <Icon name="add" />
          </Fab>
        </Drawer>
      </Container>
    );
  }
}
