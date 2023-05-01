const { request } = require("#http");
const { package } = require("#model/package");
const { parser } = require("#helpers/dom");

const SELECTOR_ROWS = "tbody > tr";
const SELECTOR_COLUMNS = "td";
const NO_RESULTS = 0;

async function findPacket(packet_code) {
  const response = await request(packet_code);
  const rows = parser(response.data).querySelectorAll(SELECTOR_ROWS);
  const events = [];

  return new Promise((resolve, reject) => {
    if (rows.length - 1 == NO_RESULTS) {
      reject();
      return;
    }

    rows.map((row) => {
      const columns = row.querySelectorAll(SELECTOR_COLUMNS);
      const packet_model = package(columns);
      events.push(packet_model);
    });

    resolve(events);
  });
}

module.exports = { findPacket };
