const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');

const server = express();
server.use(bodyParser.json());

server.use(morgan('combined'));

