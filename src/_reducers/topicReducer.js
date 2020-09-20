import { TOPIC_LIST } from "../_actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TOPIC_LIST:
      return { ...state, topicList: action.payload };
    default:
      return state;
  }
};
