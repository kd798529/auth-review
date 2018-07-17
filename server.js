const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');

const server = express();
server.use(bodyParser.json());

server.use(session({
    secret: 'jEktPEfGVm9FbXHxxwBrYm1ACSbChMv0dszVMQb1PXRlICjpfL'
}))

server.use(morgan('combined'));
const STATUS_USER_ERROR = 422;

server.get('/greet', (req, res) => {
    const name = req.query.name;
    if(!name) {
        res.status(STATUS_USER_ERROR);
        res.json({error: 'Must provide a name'});
        return;
    }
    res.json({greeting: `Hello ${name}`});
})

server.listen(4000);