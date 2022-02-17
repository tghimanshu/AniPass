import axios from "axios";

const url = "http://localhost:5000";

const get = (route) => axios.get(url + route);
const post = (route, data) => axios.post(url + route, data);
const put = (route, data) => axios.put(url + route, data);
const remove = (route) => axios.delete(url + route);

const http = {
  get,
  post,
  put,
  delete: remove,
};

export default http;
