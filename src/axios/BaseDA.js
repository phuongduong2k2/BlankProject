import axios from 'axios';
const BaseDA = axios.create({
  baseURL: 'https://6524f28967cfb1e59ce6491e.mockapi.io/api/v1',
});
const lstCode = [200, 201, 204];
export const getData = async (url, params) => {
  try {
    const config = {
      method: 'GET',
      params: params,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = await BaseDA.get(url, config);
    if (data && data.status === 200) {
      return data;
    }
    return {message: 'Something errors!'};
  } catch (error) {
    return error;
  }
};

export const postData = async (url, data) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await BaseDA.post(url, data, config);
    if (res && res.status === 201) {
      return res;
    }
    return {message: 'Something errors!'};
  } catch (error) {
    return error;
  }
};

// BaseDA.interceptors.request.use(async config => {
//   return config;
// });

// BaseDA.interceptors.response.use(
//   response => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   err => {
//     console.log('[BaseDA.js] : ', err);
//     return err;
//   },
// );

// export default BaseDA;
