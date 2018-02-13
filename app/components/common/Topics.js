import React from "react";
import { List, ListItem, Text } from "native-base";

const Topics = ({ topics }) => (
  <List>
    {topics.map(topic => (
      <ListItem key={topic.id}>
        <Text>{topic.title}</Text>
        <Text>{topic.author}</Text>
        <Text>{topic.time}</Text>
        <Text>{topic.upvotes} upvotes</Text>
      </ListItem>
    ))}
  </List>
);

export default Topics;
