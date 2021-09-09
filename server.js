const express = require('express');
const bodyParser = require('body-parser')
// IMPORT DB
require('./src/config/db')
// ASSIGN EXPRESS
const app = express();

// PORT MONITOR
app.listen(8080, () => 
console.log('Server is running'));

// SERVER CONFIG
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended:true })); // for manage post requests

app.get('/',(req,res) =>  {
    res.send('Hey')
});