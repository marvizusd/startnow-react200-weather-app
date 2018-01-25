import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import promiseMiddleware from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);
// this is going to export the store that we are going to wrap our
//  App in so that all components in that store have access to state that was imported by the RootReducer
export default rootStore;