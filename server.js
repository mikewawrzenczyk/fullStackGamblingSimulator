// built in modules
const http = require('http');
const fs = require('fs')  //used to access system files
const url = require('url'); //sees what url client is requesting
const querystring = require('querystring'); //

const figlet = require('figlet'); //installed module - npm install figlet
const { ifError } = require('assert');

// Creating the server
const server = http.createServer((req, res) => { // use http module and use createServer method to create server

  const page = url.parse(req.url).pathname; //tells us what path is being requested
  const params = querystring.parse(url.parse(req.url).query); //query parameters
  console.log(page); 
  if (page == '/') { //if on main page....
    fs.readFile('index.html', function(err, data) { //FS reads file system, selects page to serve (index.html)
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page === '/coinFlip') { //checks to see if on API page
    let flip = Math.random()
    console.log(flip)
    let objToJson
    if(flip <0.5){
       objToJson = {
        result: 'heads',
        gameStarted: 'true'
      }
    }
    else{
       objToJson = {
        result: 'tails',
        gameStarted: 'true'
      }
    }

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(objToJson))
  
  } else if (page == '/css/style.css') { //request for css file
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/images/heads.jpg') { //request for css file
    fs.readFile('images/heads.jpg', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/images/tails.jpg') { //request for css file
    fs.readFile('images/tails.jpg', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') { //request for JS file
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
    } else {
    figlet('404!!', function(err, data) { // 
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
// server is listening on port 8000