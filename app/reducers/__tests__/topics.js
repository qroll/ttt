import { topics } from "../topics";

describe("Test topics reducer", () => {
  it("should add the topic when a new topic has been submitted", () => {
    let initialState = {
      topics: {
        a1: {
          id: "a1",
          author: "Alice",
          title: "Alice"
        },
        b2: {
          id: "b2",
          author: "Bob",
          title: "Bob"
        }
      }
    };

    let action = {
      type: "SUBMIT_TOPIC",
      topic: {
        id: "c3",
        author: "Charlie",
        title: "Title"
      }
    };

    expect(topics(initialState, action)).toEqual({
      topics: {
        a1: { id: "a1", author: "Alice", title: "Alice" },
        b2: { id: "b2", author: "Bob", title: "Bob" },
        c3: { id: "c3", author: "Charlie", title: "Title" }
      }
    });
  });

  it("should update the vote count when a topic is upvoted", () => {
    let initialState = {
      topics: {
        a1: {
          id: "a1",
          author: "Alice",
          title: "Alice",
          upvotes: 0,
          downvotes: 0
        }
      }
    };

    let action = {
      type: "UPVOTE_TOPIC",
      topicId: "a1"
    };

    expect(topics(initialState, action)).toEqual({
      topics: {
        a1: {
          id: "a1",
          author: "Alice",
          title: "Alice",
          upvotes: 1,
          downvotes: 0
        }
      }
    });
  });

  it("should update the vote count when a topic is downvoted", () => {
    let initialState = {
      topics: {
        a1: {
          id: "a1",
          author: "Alice",
          title: "Alice",
          upvotes: 0,
          downvotes: 0
        }
      }
    };

    let action = {
      type: "DOWNVOTE_TOPIC",
      topicId: "a1"
    };

    expect(topics(initialState, action)).toEqual({
      topics: {
        a1: {
          id: "a1",
          author: "Alice",
          title: "Alice",
          upvotes: 0,
          downvotes: 1
        }
      }
    });
  });
});
