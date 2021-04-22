var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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

module.exports = app;
