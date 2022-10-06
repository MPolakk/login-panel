const mongoose = require('mongoose');



const Users = mongoose.model('User', { 
 username: String,
 password: String

});

module.exports = Users;