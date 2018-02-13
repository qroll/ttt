import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const enhancers = compose(applyMiddleware(thunk));

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./reducers/rootReducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
