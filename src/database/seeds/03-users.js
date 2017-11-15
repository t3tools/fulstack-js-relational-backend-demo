const User = require('../../models/User.js')

let dataRows=[
  {email: 'usertest@mail.com', password: 'wordpass'},
  {email: 'hello@mail.com', password: 'password'},
  {email: 'travo@mail.com', password: 'wowow'}
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      console.log(User  )
      // Inserts seed entries
      return User.query().insert(dataRows);
    });
};
