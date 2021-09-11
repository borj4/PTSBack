const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./src/routes/routes');

// IMPORT DB
require('./src/index');

// ASSIGN EXPRESS
const app = express();

// ASSIGN ROUTES
app.use('/', apiRouter);

// PORT MONITOR
app.listen(8080, () => 
console.log('Server is running'));

// SERVER CONFIG
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended:true })); // for manage post requests