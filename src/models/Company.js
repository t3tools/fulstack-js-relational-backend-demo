const { Model } = require('objection');


class Company extends Model {

  static get tableName (){
    return 'company'
  }

  static get relationMappings(){
    const Job = require('./Job.js')

    return {
      jobs: {
        relation: Model.HasManyRelation,
        modelClass: Job,
        join: {
          from: 'company.id',
          to: 'ob.companyId'
        }

      }
    }
  }
}


module.exports = Company
