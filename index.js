const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at port ${port}/`);
});

app.get('/:folder/:file', (req, res) => {
    res.sendFile(__dirname + `/dist/` + req.params.folder + '/'+ req.params.file);
});
app.get('/:file', (req, res) => {
    res.sendFile(__dirname + `/dist/` + req.params.file);
});
app.get('/*', (req, res) => {
    res.sendFile(__dirname + `/dist/index.html`);
});

