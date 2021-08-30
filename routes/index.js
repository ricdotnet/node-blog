const entry = require('express').Router()

module.exports = entry;

const user = require('./user')

entry.use('/user', user)