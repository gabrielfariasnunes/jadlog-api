const { request } = require("#http");
const { packet } = require("#model/packet");
const { parser } = require("#helpers/dom");

const SELECTOR_ROW = "tbody > tr";
const SELECTOR_COLUMN = "td";
const ENDPOINT = "/siteInstitucional/tracking_dev.jad?cte=";

async function findPacket(cte = "") {
  const response = await request(`${ENDPOINT}${cte}`);
  const events = [];
  const promise = new Promise(async (resolve, reject) => {
    const rows = parser(response.data).querySelectorAll(SELECTOR_ROW);
    rows.map((row) => {
      try {
        const columns = row.querySelectorAll(SELECTOR_COLUMN);
        const packet_model = packet(columns);
        events.push(packet_model);
      } catch (error) {
        reject(error);
      }
    });
    resolve(events);
  });
  return promise;
}

module.exports = { findPacket };
