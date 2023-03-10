/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { readToken } from '../utils';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer: ${readToken()}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { httpClient };
