const SPLIT_SEPARATOR = "  ";
const NOT_DOCUMENT = "Sem documento";

const package = (element) => {
  const dateHours = element[0].text.split(SPLIT_SEPARATOR);
  const data = dateHours[0].trim();
  const hora = dateHours[1].trim();
  const origem = element[1].text;
  const status = element[2].text;
  const destino = element[3].text;
  const documento = element[4].text.trim() || NOT_DOCUMENT;
  return { data, hora, origem, status, destino, documento };
};

module.exports = { package };
