const fs = require('fs');
fs.writeFile("new.txt","this is asynchronus",(err)=>{
    console.log(err)
})
fs.appendFile("new.txt","this is next asynchronus",(err)=>{
    console.log(err)
})

fs.readFile("new.txt","utf-8",(err,data)=>{
    console.log(err)
    console.log(data)
})