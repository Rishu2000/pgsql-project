console.log("object");
const knex = require("knex")({
  client: 'pg',
  connection: 'postgres://postgres:pgsql_rishav@localhost:5432/pgsql-project-db'
});
knex.schema.createTable('user', (table) => {
  table.increments('id')
  table.string('name')
  table.integer('age')
})
.then(() => {
  console.log("Created a table name 'user'.");
});