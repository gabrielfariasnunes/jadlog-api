const { homePageController, findPacketController } = require("./controllers");

const routes = require("express").Router();

const ROUTER_FIND_PACKET = "/rastrear/:cte";
const ROUTER_HOME_PAGE = "/";

routes.get(ROUTER_FIND_PACKET, findPacketController);
routes.use(ROUTER_HOME_PAGE, homePageController);

module.exports = routes;
