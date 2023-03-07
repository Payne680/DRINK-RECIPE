/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { readToken } from '../utils';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer: ${readToken()}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export { httpClient };
