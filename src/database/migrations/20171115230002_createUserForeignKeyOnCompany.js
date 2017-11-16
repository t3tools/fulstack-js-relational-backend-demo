
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('company', (companyTable)=>{
      // foreign key
      companyTable.integer('userId')
        .unsigned()
        .references('id')
        .inTable('user')

      return companyTable
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('company', function (companyTable) {
    companyTable.dropForeign('userId')
    companyTable.dropColumn('userId');
    return companyTable
  })
};
