const user = require('express').Router();

module.exports = user;

user.get('/', (req, res) => {
  console.log('user page')
  const test = req.body;
  res.end()
})