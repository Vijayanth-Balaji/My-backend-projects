const fs=require('fs');
fs.writeFileSync("text.txt","Leve 4 of web development");
fs.appendFileSync("text.txt","This Is My First Backend class");
const read_Data=fs.readFileSync("text.txt","utf-8");
console.log(read_Data);
fs.renameSync("text.txt","text1.txt")