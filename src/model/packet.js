const SPLIT_SEPARATOR = "  ";
const NOT_DOCUMENT = "Sem documento";

const packet = (columns) => {
  const dateHours = columns[0].text.split(SPLIT_SEPARATOR);
  const data = dateHours[0].trim();
  const hora = dateHours[1].trim();
  const origem = columns[1].text;
  const status = columns[2].text;
  const destino = columns[3].text;
  const documento = columns[4].text.trim() || NOT_DOCUMENT;
  return { data, hora, origem, status, destino, documento };
};

module.exports = { packet };
