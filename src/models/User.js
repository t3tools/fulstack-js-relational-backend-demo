const { Model } = require('objection');
const PasswordUser = require('objection-password')();

class User extends PasswordUser(Model) {
  static get tableName (){
    return 'user'
  }

  static get relationMappings(){
    // const Company = require('./Company.js')

    return {
      jobs: {
        relation: Model.HasOne,
        modelClass: Company,
        join: {
          from: 'user.id',
          to: 'company.userId'
        }

      }
    }
  }
}



module.exports = Job
