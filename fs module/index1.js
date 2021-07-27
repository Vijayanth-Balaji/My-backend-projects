// 1: Create a folder named it newfolder
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder
const fs=require('fs');
fs.mkdirSync("backend4");
fs.writeFileSync("backend4/bio.txt","backend task");
fs.appendFileSync("backend4/bio.txt","My First Backend");
const read_Data=fs.readFileSync("backend4/bio.txt","utf-8");
console.log(read_Data)
fs.renameSync("backend4/bio.txt","backend4/mybio.txt");
fs.unlinkSync("backend4/mybio.txt");
fs.rmdirSync("backend4");