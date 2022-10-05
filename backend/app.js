const express = require('express');
const app = express();
const {port} = require('./config')
const login = require('./routes/login')
const register = require('./routes/register')
app.use('/', login)

app.use('/', register)

app.listen(port , () => {

 console.log(`Serwer działa na porcie ${port}`)
})