const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url);
})

server.listen(9000,"127.0.0.1",()=>{
    console.log("listening on port",9000)
})