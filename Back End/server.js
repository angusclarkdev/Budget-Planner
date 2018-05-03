const express = require('express');
const bodyParser = require('body-parser');

// Express app //
const app = express();

// Parser //
app.use(bodyParser.json());

// Routes //
app.use('/api', require('./routes/api'));

// listen for requests //
app.listen(4000, function() {

console.log("Serving on 4000");
})
