var http = require ('http');
var port = 3000;
http.createServer(function(req,res){
    res.writeHead(200, {'Conten-type' : 'text/html'});
    res.write('<h1>hola mundo</h1>');
    res.end();

}).listen(port);

console.log('El servidor esta cooriendo en el puerto '+ port);

