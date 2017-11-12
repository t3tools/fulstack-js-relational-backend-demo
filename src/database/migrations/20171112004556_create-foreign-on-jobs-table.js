
exports.up = function(knex, Promise) {
  return knex.schema.table('job', function (jobTable) {
    // Add foreign key
    jobTable.integer('companyId')
      .unsigned()
      .references('id')
      .inTable('company');

    return jobTable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('job', function (jobTable) {
    jobTable.dropForeign('companyId')
    jobTable.dropColumn('companyId');

    return jobTable

  })
};
