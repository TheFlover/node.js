const http = require('http');

const scan = (port) =>
  {
    http.get(`http://localhost:${port}/ping`, (res) =>
    {
      res.setEncoding('utf8');
      res.on('data', (chunk) =>
      {
        console.log(chunk);
        console.log(`Result: find port ${port} is open`);
      });
    }).on('error', function (err)
    {
      console.log(`Error: ${err.code} at ${err.address}:${err.port}`);
    });
  };
for (let port = 3000; port < 4000; port++)
{
  scan(port);
}