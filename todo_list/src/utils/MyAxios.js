import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io'
    // timeout: 5000,
    // port:80,
    // headers: { 'X-Custom-Header': 'foobar'}
  });

  export default axiosInstance;