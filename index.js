const express = require('express');
const app  = express();
const port = 8000;

//use express router
app.use('/', require('./routes')); // it will pick default index.js route(inside the routes folder i.e index.js)

// now setting up the view engine or extention(ejs) for displaying webpages

app.set('view engine', 'ejs');  // setting up view engine and extension 
app.set('views', './views');




app.listen(port, function(err){
    if(err){
        console.log('error in running the server:', err);
    }
    console.log('server is up and running on port:',port);
})