const SPLIT_SEPARATOR = "  ";
const MESSAGE_NOT_DOCUMENT = "Sem documento";

const packet = (columns) => {
  const dateHours = columns[0].text.split(SPLIT_SEPARATOR);
  return {
    data: dateHours[0].trim(),
    hora: dateHours[1].trim(),
    origem: columns[1].text,
    status: columns[2].text,
    destino: columns[3].text,
    documento:
      columns[4].text.trim() == "" ? MESSAGE_NOT_DOCUMENT : columns[4].text,
  };
};

module.exports = { packet };
