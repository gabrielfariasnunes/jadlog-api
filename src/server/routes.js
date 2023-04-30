const routes = require("express").Router();
const { findPacket } = require("#repository");

const RESPONSE_ERROR_MESSAGE = "Pacote não encontrado";

routes.get("/:cte", (req, resp) => {
  findPacket(req.params.cte)
    .then((events) => {
      resp.json(events);
    })
    .catch(() => {
      resp.json(RESPONSE_ERROR_MESSAGE);
    });
});

module.exports = routes;
