
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('user', (userTable)=>{
    //primary key
    userTable.increments()

    //Fields
    userTable.string('email').notNullable()
    userTable.string('password').notNullable()

    return userTable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
