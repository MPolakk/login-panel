const express = require('express')
const router = express.Router();
const User = require('../model/user')
const crypto = require('crypto')


router.post('/register', async (req, res) => {
 const hashed = await crypto.createHash('sha256').update(req.body.password).digest('hex');
 
 const newUser = await new User({ username: req.body.username, password: hashed });
 newUser.save().then(() =>{ console.log("działa")});

})

module.exports = router

