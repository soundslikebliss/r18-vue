// server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const app = express();

// const staticFileMiddleware = express.static(__dirname + "/dist");
// app.use(staticFileMiddleware);
app.use(express.static(path.join(__dirname, 'dist')))
app.use(history({
  disableDotRule: true,
  verbose: true
}));
// app.use(staticFileMiddleware);

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Example app listening on port ${5555}!`);
});