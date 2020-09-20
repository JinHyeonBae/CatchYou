import axios from "axios";
import { TOPIC_SERVER } from "../Config";
import { TOPIC_LIST } from "./types";

export const addTopic = (dataToSubmit) => {
  const request = axios
    .post(`${TOPIC_SERVER}`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: TOPIC_LIST,
    payload: request,
  };
};

export const getTopicList = () => {
  const request = axios
    .get(`${TOPIC_SERVER}`)
    .then((response) => response.data);

  return {
    type: TOPIC_LIST,
    payload: request,
  };
};