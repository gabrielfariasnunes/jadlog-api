const { request } = require("#http");
const { packet } = require("#model/packet");
const { parser } = require("#helpers/dom");

const SELECTOR_ROWS = "tbody > tr";
const SELECTOR_COLUMNS = "td";
const ENDPOINT = "/siteInstitucional/tracking_dev.jad?cte=";
const EMPTY = 1;

async function findPacket(packet_code) {
  const response = await request(`${ENDPOINT}${packet_code}`);
  const rows = parser(response.data).querySelectorAll(SELECTOR_ROWS);
  const events = [];

  return new Promise(async (resolve, reject) => {
    if (rows.length == EMPTY) {
      reject();
      return;
    }

    rows.map((row) => {
      const columns = row.querySelectorAll(SELECTOR_COLUMNS);
      const packet_model = packet(columns);
      events.push(packet_model);
    });

    resolve(events);
  });
}

module.exports = { findPacket };
