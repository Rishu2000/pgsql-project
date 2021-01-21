console.log("object");
const knex = require("knex")({
  client: 'pg',
  connection: 'postgres://postgres:pgsql_rishav@localhost:5432/pgsql-project-db'
});
knex('user')
  .where({ id:7 })
  .update({ age:22 })
  .then(rows =>{
    console.log("Updated.")
  });