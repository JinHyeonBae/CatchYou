import { combineReducers } from "redux";
import user from "./userReducer";
import topicList from './topicReducer';

const rootReducer = combineReducers({
  user, topicList,
});

export default rootReducer;
