const Password = require('objection-password')();
const objection = require('objection');

function _validateInput(modelInstance){
  if (modelInstance.id) {
    throw new objection.ValidationError({
      id: [{
        message: "'id' value should not be defined before insert",
        keyword: null,
        params: null
      }]
    });
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!modelInstance.email.match(emailRegex)) {
    throw new objection.ValidationError({
      statusCode: 401,
      id: [{
        message: "'email' property is not a valid email",
        keyword: null,
        params: null
      }]
    });
  }

  if (modelInstance.password.length < 1) {
    throw new objection.ValidationError({
      statusCode: 401,
      id: [{
        message: "'password' needs to have a length",
        keyword: null,
        params: null
      }]
    });
  }


}


class User extends Password(objection.Model) {

  static get tableName (){
    return 'user'
  }

  $beforeInsert() {
    _validateInput(this)
  }

  $beforeUpdate() {
    _validateInput(this)
  }

  static get relationMappings(){
    return {
    }
  }
}



module.exports = User
