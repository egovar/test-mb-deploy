const pxpress = require('express');
const path = require('path');
const perveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at port ${port}/`);
});

