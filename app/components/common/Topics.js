import React from "react";
import { View } from "react-native";
import { Button, Icon, List, ListItem, Text } from "native-base";
import TextWrapper from "./TextWrapper";

import { displayTime } from "../../utils/time";

const Topics = ({ topics = [], onUpvote, onDownvote }) => (
  <List>
    {topics.map(topic => (
      <ListItem key={topic.id} style={styles.topic}>
        <Text style={styles.title}>{topic.title}</Text>
        <View style={styles.meta}>
          <TextWrapper style={styles.text}>{topic.author}</TextWrapper>
          <TextWrapper style={styles.text}>
            {displayTime(topic.timestamp)}
          </TextWrapper>
        </View>
        <View style={styles.actions}>
          <Button transparent iconLeft onPress={() => onUpvote(topic.id)}>
            <Icon name="arrow-up" />
            <Text>{topic.upvotes}</Text>
          </Button>
          <Button transparent iconLeft onPress={() => onDownvote(topic.id)}>
            <Icon name="arrow-down" />
            <Text>{topic.downvotes}</Text>
          </Button>
        </View>
      </ListItem>
    ))}
  </List>
);

const styles = {
  topic: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 18
  },
  meta: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 8,
    justifyContent: "flex-end"
  },
  text: {
    color: "#888",
    paddingRight: 16
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  button: {
    padding: 0,
    margin: 0
  }
};

export default Topics;
