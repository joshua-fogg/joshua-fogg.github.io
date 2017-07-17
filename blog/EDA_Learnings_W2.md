Heroku:
port sensor: const port = process.env.port  || 3000
**sets port to either environment port or default 3000

**Heroku has issues with Nodemon. -it Will crash.
**must git push to Heroku remote branch to update server.
**git gives version control vs FTP or copy, paste and upload.

**to debug = heroku run bash or heroku log
- cat [filename] = prints file to console.
- exit will exit bash.
