import axios from 'axios';
const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

axiosClient.interceptors.request.use(async config => {
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  err => {
    console.log('[axiosClient.js] : ', err);
    return err;
  },
);

export default axiosClient;
