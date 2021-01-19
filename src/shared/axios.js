import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://5f79819fe402340016f93139.mockapi.io/api/'
});

export default instance;