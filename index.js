console.log("object");
const knex = require("knex")({
  client: 'pg',
  connection: 'postgres://postgres:pgsql_rishav@localhost:5432/pgsql-project-db'
});
  knex('user')
  .insert({ name: "Rishu3", age:45})
  .then(() => {
    console.log("Inserted into table.")
  });