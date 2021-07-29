const express = require('express');
const path = require('path');
const app = express();

    console.log(__dirname)

const join = path.join(__dirname,"../views");
console.log(join);