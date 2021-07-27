const express = require('express')
const fs = require('fs')
const app = express()

const read = fs.readFileSync("index.json","utf-8")
const object = JSON.parse(read)
 
app.get('/', (req,res)=> {
  res.send(object)
  
})
app.get('/about', (req,res)=> {
  res.send('This is the about page')
  
})
app.get('/contact', (req,res)=> {
  res.send('This is the contact page')
  
})
app.get('/signup', (req,res)=> {
  res.send('This is the sign up page')
  
})
app.get('/login', (req,res)=> {
  res.send('This is the login page')
  
})
app.get('/portfolio', (req,res)=> {
  res.send('this is the portfolio page')
  
})
app.get('/benifits', (req,res)=> {
  res.send('This is the benefit page')
  
})
 
app.listen(11000)