
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('job', (jobsTable)=>{
      //primary key
      jobsTable.increments()

      //Fields
      jobsTable.string('title')
      jobsTable.string('description')
      jobsTable.string('location')
      jobsTable.integer('salary')
      jobsTable.boolean('fullTime')

      return jobsTable
    })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists('job')
};
