const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log(`we be arriving at port ${port}`);
  });

module.exports = app;