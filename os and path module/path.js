const path = require('path');
console.log(path.dirname("C:\Backend tutorial\os and path module\path.js"));
console.log(path.extname("C:\Backend tutorial\os and path module\path.js"));
console.log(path.basename("C:\Backend tutorial\os and path module\path.js"));

const p = path.parse("C:\Backend tutorial\os and path module\path.js");
console.log(p.root);
console.log(p.name);
console.log(p.dir);
console.log(p.ext);
console.log(p.base);