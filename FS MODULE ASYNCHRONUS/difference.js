const fs= require('fs');
// const data=fs.readFileSync("new1.txt","utf-8");
// console.log(data);
// console.log("after the data");
fs.readFile("new1.txt","utf-8",(err,data)=>{
    console.log(data);
});

 console.log("after the data");