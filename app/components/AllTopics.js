import React, { Component } from "react";

import Topics from "./common/Topics";

export default class AllTopics extends Component {
  componentDidMount() {
    this.props.actions.fetchTopics();
  }

  render() {
    return (
      <Topics
        topics={this.props.topics}
        onUpvote={this.props.actions.upvoteTopic}
        onDownvote={this.props.actions.downvoteTopic}
      />
    );
  }
}
