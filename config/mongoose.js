
const mongoose = require('mongoose');

/*
    1. here we are connecting mongoose with codeial_development region
    2. which is running our laptop/machine called localhost
    3. in that localhost mongodb database NOsql system is running in backend 
*/
mongoose.connect('mongodb://localhost/codeial_development');

// now whatever database we will create make connection with mongoose

const db = mongoose.connection;   // problem is big C / c  small connection right

// console.error.bind  this method will show our console log msg in the form of error
db.on('error', console.error.bind(console, 'error connecting to Mongodb'));

db.once('open', function(){
    console.log('Connected to the database :: MongoDB');
})

// to use the database 
 // now this db name we will use in index.js as importing this module
module.exports = db; 


