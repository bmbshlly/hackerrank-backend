var express = require('express');
var router = express.Router();
var data = require('../data-store');
var projects = data.getProjects();

module.exports = router;
