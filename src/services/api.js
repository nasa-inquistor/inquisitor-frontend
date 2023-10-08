import axios from "axios";

const api = axios.create({
  baseURL: "testeUrl",
});

export default api;
