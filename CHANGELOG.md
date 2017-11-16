ChangeLog: part-7-authentication
-------------------------
I.    : Install `objection-password`

II.   : Create  `2017******createUsersTable.js` Migration --`src/database/migrations` to create user table w/ email and password fields

III.   : In `src/models/user.js` Configure `User` model and configure with object-password

IV     : Import `User` model in `src/database/seeds/03-users.js` to seed user table with password hash

  + note: you will need to map over the rows and return an array of objection queryBuilder promises into `Promise.all(...)`

V      :
