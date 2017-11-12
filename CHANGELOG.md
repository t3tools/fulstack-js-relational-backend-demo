ChangeLog: part-5-data-access
-------------------------
<<<<<<< HEAD
I.    : Create `db` folder in `src/`.

II.   : Create `migrations` and `seeds` folders in `src/db/`.

III.   : Create `dbConnect.js` in `src/db/`.

IV   : Install knex and mysql packages as project dependencies

V.    : Create `knexfile.js` config file at project root. Should include -- db connection information, seeds directory destination, migration dirctory destination

VI.    : Create knex migration to create schema for a *jobs* table

VII.   : Create knex seeds to provide seed the jobs table with actual data.

VIII  :  Create `dbConnect.js` file -- imports knex, exports function that accepts configuration

IX  :   Import `dbConnect` function and `knexfile.js` object as dbConfig in `server.js` -- execute dbConnect and pass it the config object

X : 



-------------------------
Previous Setup
-------------------------
(1) Create db user

(2) Grant user privileges

(3) Create test db for this project

(4) Install knex globally
=======
I   : Add `routes/` directory in src/

II  : Add `pageRouter.js` and `api.js`

III : Configure router in `pageRouter.js` to serve files from views + export

IV  : Configure router in `api.js` to serve json + export

V   :  Import pageRouter + add to express app in `server.js` as `/` route namespace

VI   :  Import apiRouter + add to express app in `server.js` as `/api` route namespace

VII  :  Create the 404 route (No Route Found) AFTER the pageRouter and jobsRouter

VIII : Setup express static to serve static css, js + images.
>>>>>>> b-part-2-express-router
