const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');
/*
// Get list of users from database //
router.get('/users', (req, res) => {
  res.send({type: 'GET'});
})
*/
// Add new user to database //
router.post('/api/users', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  User.create(req.body, function(err, user) {
    if (err) return console.log(err);
  })
})

/*// Updates a user in database //
router.put('/users/:id', (req, res) => {
  res.send({type: 'PUT'});
})

// Delete a user from database //
router.delete('/users/:id', (req, res) => {
  res.send({type: 'DELETE'});
})
*/
module.exports = router;
