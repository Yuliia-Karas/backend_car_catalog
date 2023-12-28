const { createClient } = require("@libsql/client");


const { DB_HOST, SECRET_KEY } = process.env;

const client = createClient({
  url: DB_HOST,
  authToken: SECRET_KEY,
});

client.execute("select * from car_catalog").then((data)=>{console.log(data);}) ;

module.exports = client;
