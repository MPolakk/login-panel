const express = require('express');
const app = express();
const {port} = require('./config')
const bodyParser = require('body-parser')
const register = require('./routes/register')
const cors = require('cors')


app.use(cors())

require('./mongoose')


app.use(bodyParser.json());



app.use(register)



app.listen(port , () => {

 console.log(`Serwer działa na porcie ${port}`)
})