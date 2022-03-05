//filesystem
const fs = require("fs");

const registry = "./db/data.json";

const saveDB = (data) => {
  fs.writeFileSync(registry, JSON.stringify(data));
};

const readDB = () => {
  if (!fs.existsSync(registry)) {
    return null;
  }

  const info = fs.readFileSync(registry, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
};

module.exports = {
  saveDB,
  readDB,
};
