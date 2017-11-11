ChangeLog: part-2-express-router
-------------------------
I   : Add `routes/` directory in src/

II  : Add `pageRouter.js` and `api.js`

III : Configure router in `pageRouter.js` to serve files from views + export

IV  : Configure router in `api.js` to serve json + export

V   :  Import pageRouter + add to express app in `server.js` as `/` route namespace

VI   :  Import apiRouter + add to express app in `server.js` as `/api` route namespace

VII  :  Create the 404 route (No Route Found) AFTER the pageRouter and jobsRouter

VIII : Setup express static to serve static css, js + images.
