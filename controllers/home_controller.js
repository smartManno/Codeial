/* 
module.exports.home = function(req,res){
    return res.end('<h1> This is home controller</h1>');
}
*/
module.exports.home = function(req,res){
    return res.render('home',{
        title: "home page"
    })
}

// module.exports.actionName = function(req, res){}