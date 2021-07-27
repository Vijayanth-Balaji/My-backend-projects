const http = require('http');
const fs = require('fs');

const read = fs.readFileSync("index.json","utf-8");

const object1 = JSON.parse(read)
console.log(read)

const server = http.createServer((req,res)=>{
  

    if(req.url == "/"){
        res.end(`${object1[0].address.city} \n ${object1[0].name} \n ${object1[8].address.geo.lat}`)
    }
    console.log(req.url)
})


server.listen(9000,'127.0.0.1',()=>{
    console.log("listening on port 9000")
})
