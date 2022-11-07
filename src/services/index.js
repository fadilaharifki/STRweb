import axios from 'axios';

const createAPI = (
  baseURL = 'https://api.strpart.com/wp-json/panda/v1/',
  config = {}
) => {
  const axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...config,
  });

  // setup axios.intercept
  return axiosInstance;
};

const myAxios = createAPI();

export function customAxios(url) {
  return createAPI(url);
}

export default myAxios;
