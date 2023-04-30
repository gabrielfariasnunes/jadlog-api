const { homePageController, findPacketController } = require("./controllers");

const routes = require("express").Router();

const PARAM_PACKET_CODE = "/rastrear/:cte";
const PARAM_HOME_PAGE = "/";

routes.get(PARAM_PACKET_CODE, findPacketController);
routes.use(PARAM_HOME_PAGE, homePageController);

module.exports = routes;
