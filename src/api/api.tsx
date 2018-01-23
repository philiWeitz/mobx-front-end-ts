
import axios from 'axios';
import errorLogger from './api-error-logger';


const mockyApi = axios.create({
  baseURL: 'http://www.mocky.io',
  timeout: 10 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

mockyApi.interceptors.response.use(response => response, errorLogger);


export default mockyApi;
