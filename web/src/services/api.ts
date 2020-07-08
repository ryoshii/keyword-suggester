import axios from 'axios';

const api = axios.create({
  baseURL: 'https://arcane-fjord-26881.herokuapp.com/getmsg/',
});

export default api;
