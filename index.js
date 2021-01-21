console.log("object");
const knex = require("knex")({
  client: 'pg',
  connection: 'postgres://postgres:pgsql_rishav@localhost:5432/pgsql-project-db'
});
knex('user')
  .where({ name: "Rishu3" })
  .then(rows =>{
    console.log("Selected.")
  });