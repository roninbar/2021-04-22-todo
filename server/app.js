const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug');

const log = debug('server:api');

const items = [
    {
        what: 'Buy milk',
        when: '2021-04-23',
        complete: false,
    },
    {
        what: 'Wash the floor',
        when: '2021-04-23',
        complete: false,
    },
    {
        what: 'Buy JS book',
        when: '2021-04-23',
        complete: false,
    },
];

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/todo', function (req, res) {
    return res.json(items);
});

app.post('/api/todo', function(req, res) {
    log(req.body);
    items.push({
        what: req.body.what,
        when: req.body.when,
        complete: false,
    });
    return res.set('Content-Location', `/api/todo/${items.length - 1}`).sendStatus(201);
});

module.exports = app;
