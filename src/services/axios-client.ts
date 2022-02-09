import axios from 'axios';

const SUBSCRIPTION_KEY = '3d5ef4248f594a53a24c0436d24078dd';
const urlBase = 'https://api.bing.microsoft.com';

/**
 * Detects if a a new base URL start with http or https:
 * @param {string}  url string with URL to be requested
 **/
const readUrl = (url = '') => (
  url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`
);

const get = (url = '', headers = {}) => axios.get(readUrl(url), {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
    ...headers,
  },
});

const post = (url = '', body = {}, headers = {}) => axios.post(readUrl(url), body, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});

const put = (url = '', body = {}, headers = {}) => axios.put(readUrl(url), body, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});

const del = (url = '', headers = {}) => axios.delete(readUrl(url), {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});

export default {
  get,
  post,
  put,
  delete: del,
};
