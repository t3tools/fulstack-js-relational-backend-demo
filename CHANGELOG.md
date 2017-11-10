ChangeLog: part-2-express-router
-------------------------
I   : Add `routes/` directory in src/

II  : Add `pageRouter.js` and `jobsRouter.js` file src/routes/

III : Configure router in `pageRouter.js` + export

IV  : Configure router in `jobsRouter.js` + export

V   :  Import pageRouter + add to express app in `server.js` as `/` route namespace

VI   :  Import jobsRouter + add to express app in `server.js` as `/jobs` route namespace

VII  :  Create the 404 route (No Route Found) AFTER the pageRouter and jobsRouter
