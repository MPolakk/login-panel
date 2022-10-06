const express = require('express');
const app = express();
const {port} = require('./config')




require('./mongoose')

const register = require('./routes/register')


app.use(register)



app.listen(port , () => {

 console.log(`Serwer działa na porcie ${port}`)
})