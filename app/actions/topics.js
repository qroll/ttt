import { uniqueId } from "lodash";
import moment from "moment";

export const fetchTopics = () => dispatch => {
  dispatch({
    type: "FETCH_TOPICS"
  });
};

export const submitTopic = topic => dispatch => {
  Promise.resolve({
    id: uniqueId(),
    time: moment.now(),
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
  dispatch({
    type: "UPVOTE_TOPIC",
    topicId
  });
};

export const downvoteTopic = topicId => dispatch => {
  dispatch({
    type: "DOWNVOTE_TOPIC",
    topicId
  });
};
