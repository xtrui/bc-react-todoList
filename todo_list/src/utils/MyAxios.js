import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/todos',
    timeout: 5000,
    port: 80,
    // headers: { 'X-Custom-Header': 'foobar'}
});

  export default axiosInstance;