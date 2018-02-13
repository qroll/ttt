import { sortBy } from "lodash";

const initialState = {
  topics: {},
  topTopics: []
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
      let topTopics = sortBy(Object.values(state.topics), [
        o => {
          return o.upvotes;
        }
      ]).slice(0, 20);
      return { ...state, topTopics };
    }
    case "SUBMIT_TOPIC": {
      let newTopic = topic(null, action);
      let topics = { ...state.topics, [newTopic.id]: newTopic };
      return { ...state, topics };
    }
    case "UPVOTE_TOPIC": {
      let updatedTopic = topic(state[action.topicId], action);
      let topics = { ...state.topics, [updatedTopic.id]: updatedTopic };
      return { ...state, topics };
    }
    case "DOWNVOTE_TOPIC": {
      let updatedTopic = topic(state[action.topicId], action);
      let topics = { ...state.topics, [updatedTopic.id]: updatedTopic };
      return { ...state, topics };
    }
    default:
      return state;
  }
};

export default topics;
