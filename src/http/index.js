const axios = require("axios");

const http = axios.default.create({
  baseURL: "https://www.jadlog.com.br",
});

module.exports = {
  async request(params) {
    return http.get(params);
  },
};
