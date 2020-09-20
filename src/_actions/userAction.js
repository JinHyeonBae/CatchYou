import axios from "axios";
import { USER_SERVER } from "../Config";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const registerUser = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const authUser = () => {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const reservationUser = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/reservation`, dataToSubmit)
    .then((response) => response.data);
};
