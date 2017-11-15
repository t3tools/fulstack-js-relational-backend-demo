const { Model } = require('objection');


class Company extends Model {

  static get tableName (){
    return 'company'
  }

  static get relationMappings(){
    const Job = require('./Job.js')
    const User = require('./User.js')

    return {
      jobs: {
        relation: Model.HasManyRelation,
        modelClass: Job,
        join: {
          from: 'company.id',
          to: 'job.companyId'
        }
      }
      // user: {
      //   relation: Model.BelongsToOneRelation,
      //   modelClass: User,
      //   join: {
      //     from: 'company.userId',
      //     to: 'user.id'
      //   }
      // }
    }
  }
}


module.exports = Company
