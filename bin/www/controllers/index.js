const { findPacket } = require("#repository");

const RESPONSE_ERROR_MESSAGE = "Pacote não encontrado";
const RESPONSE_ERROR = 404;

module.exports = {
  homePageController(_, resp) {
    resp.end();
  },
  findPacketController(req, resp) {
    const code = req.params.cte;
    findPacket(code)
      .then((events) => {
        resp.json(events);
      })
      .catch(() => {
        resp.status(RESPONSE_ERROR);
        resp.json({ error: RESPONSE_ERROR_MESSAGE });
      });
  },
};
