import { orderBy } from "lodash";

const initialState = {
  topics: {},
  topTopics: [],
  allTopics: []
};

export const topic = (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_TOPIC":
      return action.topic;
    case "UPVOTE_TOPIC":
      return {
        ...state,
        upvotes: state.upvotes + 1
      };
    case "DOWNVOTE_TOPIC":
      return {
        ...state,
        downvotes: state.downvotes + 1
      };
    default:
      return state;
  }
};

export const topics = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOPICS": {
      let topTopics = orderBy(
        Object.values(state.topics),
        [
          o => {
            return o.upvotes;
          }
        ],
        ["desc"]
      )
        .slice(0, 20)
        .map(topic => topic.id);
      let allTopics = orderBy(
        Object.values(state.topics),
        [
          o => {
            return o.timestamp;
          }
        ],
        ["desc"]
      ).map(topic => topic.id);
      return { ...state, topTopics, allTopics };
    }
    case "SUBMIT_TOPIC": {
      let newTopic = topic(null, action);
      let topics = { ...state.topics, [newTopic.id]: newTopic };
      return { ...state, topics };
    }
    case "UPVOTE_TOPIC": {
      let updatedTopic = topic(state.topics[action.topicId], action);
      let topics = { ...state.topics, [updatedTopic.id]: updatedTopic };
      return { ...state, topics };
    }
    case "DOWNVOTE_TOPIC": {
      let updatedTopic = topic(state.topics[action.topicId], action);
      let topics = { ...state.topics, [updatedTopic.id]: updatedTopic };
      return { ...state, topics };
    }
    default:
      return state;
  }
};

export default topics;
