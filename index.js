const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist'));
let port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);