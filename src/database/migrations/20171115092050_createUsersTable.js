
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('user', (jobTable)=>{
    //primary key
    jobTable.increments()

    //Fields
    jobTable.string('email')
    jobTable.string('password')

    return jobTable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
