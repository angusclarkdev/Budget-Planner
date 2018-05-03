const express = require('express');

const router = express.Router();

// Get list of users from database //
router.get('/users', (req, res) => {
  res.send({type: 'GET'});
})

// Add new user to database //
router.post('/users', (req, res) => {

  res.send({
    type: 'POST',
    email: req.body.email,
    password: req.body.password
  });
  console.log(req.body);
})

// Updates a user in database //
router.put('/users/:id', (req, res) => {
  res.send({type: 'PUT'});
})

// Delete a user from database //
router.delete('/users/:id', (req, res) => {
  res.send({type: 'DELETE'});
})

module.exports = router;
