import { uniqueId } from "lodash";
import moment from "moment";

export const fetchTopics = () => dispatch => {
  return dispatch({
    type: "FETCH_TOPICS"
  });
};

export const submitTopic = topic => dispatch => {
  return Promise.resolve({
    id: uniqueId(),
    timestamp: moment.now(),
    upvotes: 0,
    downvotes: 0,
    ...topic
  }).then(topic => {
    dispatch({
      type: "SUBMIT_TOPIC",
      topic
    });
  });
};

export const upvoteTopic = topicId => dispatch => {
  return dispatch({
    type: "UPVOTE_TOPIC",
    topicId
  });
};

export const downvoteTopic = topicId => dispatch => {
  return dispatch({
    type: "DOWNVOTE_TOPIC",
    topicId
  });
};
