ChangeLog: part-7-authentication
-------------------------
I.    : Install `objection-password`

II.   : Create  `2017******createUsersTable.js` Migration --`src/database/migrations` w/ email and password fields

III.   : In `src/models/user.js` Configure `User` model and configure with object-password

IV     : Import `User` model + seed database in  `src/database/seeds/03-users.js`

  + note: you will need to map over the rows and return an array of objection queryBuilder promises into `Promise.all(...)`

```js
const User = require('../../models/User.js')
const { Model } = require('objection')

...

Model.knex(knex)
return knex('user').del()
  .then(function () {
    // Inserts seed entries
    return Promise.all(userDataRows.map( u => User.query().insert(u) ))
  })
```
