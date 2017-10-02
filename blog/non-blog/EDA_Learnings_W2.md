JSON OBjects: uses " " for key and values.
JS objects: uses ' ' for strings but not for keys. keys dont need quotes.

Server Side Rendering:
Index.js: starts server. requires; express, routes, setting server or app to express(), defining routes.
Server.js: configures server settings & data tepmplate. server.set, server.engine(main template etc)
          - requires: express, hbs, routes, set server to express, server.enginge.
Routes.js: set routes & router. requires express and router, "const router = express.Router"


Handlebars: Server Rendering
{{{body}}}
{{layout}}
{{< partial}}


Heroku:
port sensor: const port = process.env.port  || 3000
**sets port to either environment port or default 3000

**Heroku has issues with Nodemon. -it Will crash.
**must git push to Heroku remote branch to update server.
**git gives version control vs FTP or copy, paste and upload.

**to debug = heroku run bash or heroku log
- cat [filename] = prints file to console.
- exit will exit bash.
