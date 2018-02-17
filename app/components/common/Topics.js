import React from "react";
import { View } from "react-native";
import { Button, Icon, List, ListItem, Text } from "native-base";

import { displayTime } from "../../utils/time";

const Topics = ({ topics = [], onUpvote, onDownvote }) => (
  <List>
    {topics.map(topic => (
      <ListItem key={topic.id} style={styles.topic}>
        <Text style={styles.title}>{topic.title}</Text>
        <View style={styles.meta}>
          <Text style={styles.text}>{topic.author}</Text>
          <Text style={styles.text}>{displayTime(topic.timestamp)}</Text>
        </View>
        <View style={styles.actions}>
          <Button transparent onPress={() => onUpvote(topic.id)}>
            <Icon name="arrow-up" />
          </Button>
          <Text>{topic.upvotes}</Text>
          <Button transparent onPress={() => onDownvote(topic.id)}>
            <Icon name="arrow-down" />
          </Button>
          <Text>{topic.downvotes}</Text>
        </View>
      </ListItem>
    ))}
  </List>
);

const styles = {
  topic: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 24
  },
  meta: { flexDirection: "row" },
  text: {
    padding: 5
  },
  actions: { flexDirection: "row" }
};

export default Topics;
