
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
  console.log(req.body);
  res.writeHead(200); 
  res.end();
};