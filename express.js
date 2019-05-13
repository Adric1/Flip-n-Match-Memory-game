const expressver = require('express');

const app  = expressver();
const port = 8080;

app.use(expressver.static('FlipGame'));

app.listen(port);

console.log('listening to port:8080');