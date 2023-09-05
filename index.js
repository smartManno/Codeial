const express = require('express');
const app  = express();
const port = 8000;

// to include static files that we have made in assets folder css js images
app.use(express.static('./assets'))

/*
    this is to tell the App that individual styles of individual pages
    should come on layout.ejs when ever it see the link tag then it notify the aap (index.js)
    using below 2 lines of code
*/
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

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