import httpClient from './axios-client';

function search(query = '') {
  return httpClient.get(`/v7.0/search?q=${encodeURIComponent(query)}`).then((response) => response.data);
}

export default { search };
