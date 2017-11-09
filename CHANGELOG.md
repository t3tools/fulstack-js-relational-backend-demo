ChangeLog: part-3-express-views
-------------------------
I    : Install EJS

II   : Add `views` folder to file `src/`

III  : Add `home.ejs`, `about.ejs`, `404.ejs` files to `src/views/`

IV   : In `server.js`, import + configure ejs view engine for express.
  - (IV-1) :  
  - (IV-2) :

V    : Configure router with `res.render(...)` for */* and */about*  and 404 routes.
  - (V-1) : Pass to a view

VI   : In `dist/` create `css/`, `js/`.


VII  : In `dist/css/`, create `styles.css` and in `dist/js/` `bundle.js`

VIII :  Configure `express.static` serving static files from dist
