import axios from 'axios';
const BaseDA = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

BaseDA.interceptors.request.use(async config => {
  return config;
});

BaseDA.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  err => {
    console.log('[BaseDA.js] : ', err);
    return err;
  },
);

export default BaseDA;
