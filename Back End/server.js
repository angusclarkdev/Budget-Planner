const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Express app //
const app = express();

// connect to db //
mongoose.connect('mongodb://localhost/users_db');
mongoose.Promise = global.Promise;
// Parser //
app.use(bodyParser.json());

// Routes //
const routes = require('./routes/api');
app.use(routes);

// listen for requests //
app.listen(4000, function() {

console.log("Serving on 4000");
})
