const requests = require('requests');
const http = require('http');
const fs = require('fs');

const read = fs.readFileSync("index.html","utf-8")

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=30a4ed561cbdc37d5643d52f2cf94eb3')
        .on('data', function (chunk) {
          
          const object = JSON.parse(chunk)
         
          res.end( replace(object,read))
          console.log(object)
        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
         
          console.log('end');
        });

    }
})

server.listen(3000,"127.0.0.1")

const replace = (object,read)=>{
    var change = read.replace("{%Cityname%}",object.name)
    change = change.replace("{%Countryname%}",object.sys.country);
    change = change.replace("{%temperature%}", (object.main.temp-273.15).toFixed(2));
    change = change.replace("{%Mintemp%}", (object.main.temp_min-273.15).toFixed(2))
    change = change.replace("{%Maxtemp%}", (object.main.temp_max-273.15).toFixed(2))


    return(change);
}




