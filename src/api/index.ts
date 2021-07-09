import axios from "axios";

const api = axios.create({
  baseURL: "//us-central1-fe-ws-test.cloudfunctions.net",
});

export default api;
