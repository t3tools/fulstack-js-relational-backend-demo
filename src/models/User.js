const Password = require('objection-password')();
const Model = require('objection').Model;


class User extends Password(Model) {

  static get tableName (){
    return 'user'
  }

  static get relationMappings(){

    return {
    }
  }
}



module.exports = User
