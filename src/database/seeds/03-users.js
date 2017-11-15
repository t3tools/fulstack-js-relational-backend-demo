import User from '../../models/User.js'

let dataRows=[
  {email: 'usertest', password: 'wordpass'},
  {email: 'hello', password: 'password'}
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return User.insert(dataRows);
    });
};
