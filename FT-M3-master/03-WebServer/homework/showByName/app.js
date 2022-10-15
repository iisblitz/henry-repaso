var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor

//paso 1 create server
http.createServer((req,res)=>{
    fs.readFile(`${___dirname}/images/${req.url}`,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-type' : 'text/plain'});
             res.end('Hubo un error');
            }
         else{
            res.writeHead(200,{'Content-type':'image/jpg'});            
            res.end(data)
         }
    })
}).listen(3000,'127.0.0.1'); //paso 2 listen y el local host