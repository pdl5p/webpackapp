var express = require('express');
var app = express();

var port = process.env.port || 8080;

app.use('/', express.static(__dirname));

app.get('/api', (req, res) => {
    res.send("Hello API");
});

app.listen(port, () => {
    console.log(`Listening on: ${port}`);
});
