const User = require('../../models/User.js')
const { Model } = require('objection')


let userDataRows = [
  {email: 'usertest@mail.com', password: 'wordpass'},
  {email: 'hello@mail.com', password: 'password'},
  {email: 'travo@mail.com', password: 'wowow'},
  {email: 'benny@mail.com', password: 'jets'}

]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  Model.knex(knex)
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(userDataRows.map( u => User.query().insert(u) ))
    })
};
