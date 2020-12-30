const http = require('http');

http.get({
    hostname: 'localhost',
    port: 3000,
    path: '/ping',
    agent: false  // Create a new agent just for this one request
  }, (res) => {
    console.log(res.statusCode);
  });