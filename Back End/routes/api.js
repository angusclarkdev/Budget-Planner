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
router.post('/users', (req, res) => {
  let user = new User(req.body);
  user.save(function(err) {
    if (err)  {
      return handleError(err);
    }
    res.send(user)
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
