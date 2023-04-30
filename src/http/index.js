const axios = require("axios");
const BASE_HTTP_URL = "https://www.jadlog.com.br"
const http = axios.default.create({
  baseURL: BASE_HTTP_URL,
});

module.exports = {
  async request(params) {
    return http.get(params);
  },
};
