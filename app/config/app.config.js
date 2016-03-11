var app = require('../../server.js')
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Application Configuration
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../../public'));