const express = require("express");
const router = express.Router();
const db = require('../users/userModel')
const restricted = require('../routes/restrictedMiddleware')


router.get('/', restricted,  (req, res) => {
    db.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  module.exports = router;
  