const { Model } = require('objection');


class Job extends Model {
  static get tableName (){
    return 'job'
  }

  static get relationMappings(){
    const Company = require('./Company.js')

    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: 'job.companyId',
          to: 'company.id'
        }
      }
    }
  }
}


module.exports = Job
