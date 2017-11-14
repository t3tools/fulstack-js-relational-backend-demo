const { Model } = require('objection');
const PasswordUser = require('objection-password')();

class User extends PasswordUser(Model) {
  static get tableName (){
    return 'user'
  }
}



module.exports = Job
