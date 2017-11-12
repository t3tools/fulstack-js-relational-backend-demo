ChangeLog: part-5-models-access
-------------------------
I.    : Install objection

II.   : Import objection into `server.js` as `Model`

III   : Pass db connection to objection `Model.knex(...)`

IV.   : Create `models` directory in `src/`

III   : Create `Job.js` models

IV     : Import objection in `Job.js` and configure the Job model

V     : Import Job model in apiRouter and use Job model to fetch.

VI     : Create migration for foreign key on `job` table (job belongs to company)

VI    : Create `Company` model + include relation to Job model

X     : Import Company model and use `eager()`  to fetch related data.
