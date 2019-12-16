const express = require('express');
const path = require('path');
// const port = 'http://54.215.161.166/';
port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:hostId', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log(`Arriving at ${port}`);
  });

module.exports = app;
