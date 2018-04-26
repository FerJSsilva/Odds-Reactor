import request from 'superagent';
import { SERVICE_HTTP_ADDRESS } from '../utils/constants';

export function get(url, id) {
  const urlTemplate = (id && `${SERVICE_HTTP_ADDRESS + url}/${id}`) || `${SERVICE_HTTP_ADDRESS + url}`;
  return new Promise((resolve, reject) =>
    request
      .get(urlTemplate)
      .accept('application/json')
      .type('application/json')
      .end((error, response) => {
        if (response && response.body) {
          resolve(response.body);
        } else {
          reject(error);
        }
      }));
}

export function post(url, params) {
  return new Promise((resolve, reject) =>
    request
      .post(SERVICE_HTTP_ADDRESS + url)
      .send(params)
      .accept('application/json')
      .type('application/json')
      .end((error, response) => {
        if (response && response.status === 200) {
          resolve(response.body);
        } else {
          reject(error);
        }
      }));
}

export function put(url, params) {
  return new Promise((resolve, reject) =>
    request
      .put(SERVICE_HTTP_ADDRESS + url)
      .send(params)
      .accept('application/json')
      .type('application/json')
      .end((error, response) => {
        if (response && response.status === 200) {
          resolve(response.body);
        } else {
          reject(error);
        }
      }));
}

export function patch(url, params) {
  return new Promise((resolve, reject) =>
    request
      .patch(SERVICE_HTTP_ADDRESS + url)
      .send(params)
      .accept('application/json')
      .type('application/json')
      .end((error, response) => {
        if (response && response.status === 200) {
          resolve(response.body);
        } else {
          reject(error);
        }
      }));
}

export function del(url, params) {
  return new Promise((resolve, reject) =>
    request
      .delete(SERVICE_HTTP_ADDRESS + url)
      .send(params)
      .accept('application/json')
      .type('application/json')
      .end((error, response) => {
        if (response && response.status === 200) {
          resolve(response.body);
        } else {
          reject(error);
        }
      }));
}
