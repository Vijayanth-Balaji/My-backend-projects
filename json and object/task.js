// TASK
// 1. create object and convert it to JSON
// 2. add the same into another file
// 3. readfile
// 4. convert JSON to object back again
// 5. log the object

const fs = require('fs');
const obj={
    name:"vijayanth",
    school:"sri chaitanya techno school",
    years:13
}
console.log(obj)

const json = JSON.stringify(obj)
console.log(json)

fs.writeFileSync("new.txt",json)

const read = fs.readFileSync("new.txt","utf-8");
console.log(read)

const objData = JSON.parse(json);
console.log(objData)