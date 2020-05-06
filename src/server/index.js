const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

// app.use(express.static('src/client'));
app.use(express.static('dist'));

console.log('* Current directory:', __dirname);

app.get('/', function (req, res) {
    // res.sendFile('/client/views/index.html', { root: __dirname + '/..' });
    res.sendFile('/dist/index.html');
});

// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
