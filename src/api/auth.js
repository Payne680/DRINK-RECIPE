import { httpClient } from './axios';

export function register(user) {
  return httpClient.post(`users`, user);
}

export function login(username, password) {
  return httpClient.post('login', { username, password });
}

export function getCurrentUser() {
  return httpClient.get('current-user').then(({ data }) => data);
}

export function updateCurrentUser(data) {
  return httpClient.patch(`users/${data.id}`, data);
}

export function addContent(drink) {
  return httpClient.post(`drinks`, drink);
}

export function getOneDrink(drink) {
  return httpClient.get(`drink/${drink.id}`, drink);
}

export function updateDetails(drink) {
  return httpClient.put(`drink/${drink.id}`, drink);
}

export function deleteDrink(data) {
  return httpClient.delete(`drinks/${data}`, data);
}
