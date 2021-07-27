const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url);

    if(req.url=="/"){
        res.end("this is a home page")
    }
    else if(req.url=="/about"){
        res.end("this is a about page")
    }
    else if(req.url=="/contact"){
        res.end("this is a home page")
    }
    else if(req.url=="/pay"){
        res.end("this is a home page")
    }
    else if(req.url=="/career"){
        res.end("this is a home page")
    }

    else{
        res.writeHead(404)
        res.end("this is a invalid request,pls enter a valid request")
    }
    
})

server.listen(9000,"127.0.0.1",()=>{
    console.log("listening on port",9000)
})