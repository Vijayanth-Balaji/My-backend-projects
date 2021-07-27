// 1: Create a folder named it newfolder
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder
const fs=require('fs');
// fs.mkdir("backendtask",(err)=>{
//     console.log(err)
//  });
//  fs.writeFile("backendtask/new1.txt","Iam Vijayanth",(err)=>{
//      console.log(err)
//  })
//  fs.appendFile("backendtask/new1.txt","Iam Vijayanth Doing backend development",(err)=>{
//     console.log(err)
//  })

// fs.readFile("backendtask/new1.txt","utf-8",(err,data)=>{
//     console.log(err)
//     console.log(data)
// })

// fs.rename("backendtask/new1.txt","backendtask/new2.txt",(err)=>{
//     console.log(err)
// })

// fs.unlink("backendtask/new2.txt",(err)=>{
//     console.log(err)
// })
fs.rmdir("backendtask",(err)=>{
    console.log(err)
})
