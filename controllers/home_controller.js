/* 
module.exports.home = function(req,res){
    return res.end('<h1> This is home controlle      
    
*/
module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id' , 22);       

     
    return res.render('home',{            // home is home.ejs
        title: "home page"
    })
}

// module.exports.actionName = function(req, res){}

