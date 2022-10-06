const express = require('express')
const router = express.Router();
// const User = require('../model/user')
const crypto = require('crypto')
const sha256 = crypto.createHash('sha256');

router.get('/register', (req, res) => {
 sha256.update("cos")
 res.send(sha256.digest('hex'))
 // const newUser = new User({ username: "Hehe", password: "greded"});
 // newUser.save().then(() => console.log('Nowy użytkownik dodany'));
})

module.exports = router

