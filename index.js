const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 5000 ;


const server = http.createServer((req,res) => {

    console.log("Request for "+req.url + 'by method ' + req.method);
    
    if(req.method == 'GET'){
        var fileUrl ;
        if(req.url =='/') fileUrl = '/index.html';
        else fileUrl == req.url;

        var filePath = path.resolve('./public'+fileUrl)
        const fileExt = path.extname(filePath);
        if (fileExt =='.html'){
            fs.exists(filePath , (exists) => {
                if (!exists) {
                    res.statusCode = 404 ;
                    res.setHeader('Content-Type','text/html');
                    res.end('<h1>Error : 404</h1>'+fileUrl+'not found!');
                    return ;
                }
                res.statusCode = 200 ;
                res.setHeader("Content-Type" , 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Error : 404</h1>' + fileUrl + 'not an html file !');
            return;
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Error : 404</h1>' + fileUrl + 'not supported  !');
        return;
    }

})

server.listen(port , hostname , () => {
    console.log(`Server is listning on ${port} and ${hostname}`);
})

