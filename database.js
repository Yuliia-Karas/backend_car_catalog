const { createClient } = require("@libsql/client");

const { DB_HOST, SECRET_KEY } = process.env;

const client = createClient({
  url: DB_HOST,
  authToken: SECRET_KEY,
});

const carCatalog = client.execute("select * from car_catalog");

module.exports = { client, carCatalog };
