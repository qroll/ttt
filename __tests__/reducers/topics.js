import React from "react";
import { topics } from "./app/reducers/topics";

let tempState = {
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

describe("Test topics reducer", () => {
  it("should add the topic when a new topic has been submitted", () => {
    let action = {
      type: "SUBMIT_TOPIC",
      topic: {
        id: "c3",
        author: "Charlie",
        title: "Title"
      }
    };
    expect(topics(tempState, action)).toEqual({
      topics: {
        a1: { id: "a1", author: "Alice", title: "Alice" },
        b2: { id: "b2", name: "Bob", title: "Bob" },
        c3: { id: "c3", author: "Charlie", title: "Title" }
      }
    });
  });
});
