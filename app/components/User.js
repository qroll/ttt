import React, { Component } from "react";
import { View } from "react-native";
import { Button, Form, Input, Item, Label, Text } from "native-base";

export const Login = ({ username, onChange, onLogin }) => (
  <View>
    <Form style={{ paddingBottom: 16 }}>
      <Item inlineLabel>
        <Label>Username</Label>
        <Input onChangeText={onChange} value={username} />
      </Item>
      <Item inlineLabel>
        <Label>Password</Label>
        <Input />
      </Item>
    </Form>
    <Button
      onPress={onLogin}
      disabled={username.length === 0}
      rounded
      style={{ alignSelf: "center" }}
    >
      <Text>Log in</Text>
    </Button>
  </View>
);

export const UserProfile = ({ user, onLogout }) => (
  <View>
    <Form style={{ paddingBottom: 16 }}>
      <Item inlineLabel>
        <Label>Username</Label>
        <Input disabled value={user.username} />
      </Item>
    </Form>
    <Button onPress={onLogout} rounded style={{ alignSelf: "center" }}>
      <Text>Log out</Text>
    </Button>
  </View>
);

class User extends Component {
  state = {
    username: ""
  };

  onChange = input => {
    this.setState({ username: input });
  };

  onLogin = () => {
    this.props.actions.login(this.state.username);
  };

  onLogout = () => {
    this.props.actions.logout();
  };

  render() {
    return (
      <View>
        {this.props.isLoggedIn ? (
          <UserProfile user={this.props.user} onLogout={this.onLogout} />
        ) : (
          <Login
            username={this.state.username}
            onChange={this.onChange}
            onLogin={this.onLogin}
          />
        )}
      </View>
    );
  }
}

export default User;
