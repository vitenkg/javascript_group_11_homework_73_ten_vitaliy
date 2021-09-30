const express = require('express');
const Caesar = require('caesar-salad').Caesar;

const app = express ();

const port = 8000;

app.get('/encode/:code', (req, res) => {
    res.send(Caesar.Cipher('password').crypt(req.params.code));
});

app.get('/decode/:code', (req, res) => {
    res.send(Caesar.Decipher('password').crypt(req.params.code));
});


app.listen(port, () => {
    console.log('We are live on ' + port);
});
