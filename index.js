const http = require('http');

const hostname = 'localhost';
const port = 5000 ;


const server = http.createServer((req,res) => {

    console.log(req.headers);

    res.statusCode= 200 ;
    res.setHeader('Content-type' , 'text/html')
    res.end("<h1>This is first page !</h1>");

})

server.listen(port , hostname , () => {
    console.log(`Server is listning on ${port} and ${hostname}`);
})

