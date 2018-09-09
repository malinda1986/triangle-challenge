const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const path = require('path');
const ts = require('./src/modules/app');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/shape', function(req, res) {
    res.send(ts(req.body));
});

app.listen(8080, function(){
    console.log('App is listening in port 8080....');
});
